import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import {
  Post,
  NewPost,
  Comment,
  NewComment,
  User,
  PostWithComments,
} from "../app/types";
import { RootState } from "../app/store";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URI,
    prepareHeaders: (headers, { getState }) => {
      // Set JWT token for authentication
      const token = (getState() as RootState).auth.token;
      if (token) {
        // if token exists
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<string, User>({
      query: (user: User) => ({
        url: "/login",
        method: "POST",
        body: JSON.stringify(user),
        responseHandler: "text", // Backend returns a string token
      }),
    }),
    createUser: builder.mutation<string, User>({
      query: (user: User) => ({
        url: "/user",
        method: "POST",
        body: JSON.stringify(user),
        responseHandler: "text",
      }),
    }),
    getCommentById: builder.query<Comment, number>({
      query: (id: number) => `/comments/c-${id}`,
    }),
    createNewComment: builder.mutation<Comment, NewComment>({
      query: (newComment: NewComment) => ({
        url: "/comments",
        method: "POST",
        body: JSON.stringify({
          ...newComment,
          Postedon: new Date().toJSON(),
        }),
      }),
    }),
    createNewPost: builder.mutation<Post, NewPost>({
      query: (newPost: NewPost) => ({
        url: "/post",
        method: "POST",
        body: JSON.stringify({
          ...newPost,
          Postedon: new Date().toJSON(),
        }),
      }),
    }),
    getPostbyCategory: builder.query<Post[], string>({
      queryFn: async (tag, _api, _extraOptions, baseFetch) => {
        let Posts;
        if (tag === "") {
          Posts = await baseFetch("/Posts");
        } else {
          Posts = await baseFetch(`/tags/${tag}`);
        }

        if (Posts.error) {
          return { error: Posts.error as FetchBaseQueryError };
        } else {
          return { data: Posts.data as Post[] };
        }
      },
    }),
    getPostById: builder.query<PostWithComments, number>({
      queryFn: async (PostId, _api, _extraOptions, baseFetch) => {
        const Post = await baseFetch(`/Posts/${PostId}`);
        const comments = await baseFetch(`/comments/t-${PostId}`);
        if (Post.error) {
          return { error: Post.error as FetchBaseQueryError };
        } else if (comments.error) {
          return { error: comments.error as FetchBaseQueryError };
        }

        return {
          data: {
            ...(Post.data as Post),
            Comments: comments.data as Comment[],
          } as PostWithComments,
        };
      },
    }),
  }),
});

export const {
  useGetPostByIdQuery,
  useGetCommentByIdQuery,
  useCreateNewPostMutation,
  useCreateNewCommentMutation,
  useCreateUserMutation,
  useGetPostbyCategoryQuery,
  useLoginMutation,
  useLazyGetPostByIdQuery,
} = apiSlice;
