import client from "./baseClient";

export async function getPosts() {
  try {
    const response = await client.get("/");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
