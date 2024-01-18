export type Post = {
  Category: number;
  Title: string;
  Content: string;
  Time: string;
  Username: string;
  PostID: number;
};
export type NewPost = Omit<Post, "Time" | "Username">;
export type Comment = {
  PostID: number;
  Content: string;
  Time: string;
  Username: string;
};
export type NewComment = Omit<Comment, "Username">;
export type User = {
  Username: string;
  Password: string;
};
export type PostWithComments = {
  PostID: number;
  Title: string;
  Content: string;
  Time: string;
  Username: string;
  Comments: Comment[];
};
