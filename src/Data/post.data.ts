import { Post } from "@models/Post";
const URL = "https://jsonplaceholder.typicode.com/posts";

export const list = async (): Promise<Post[]> => {
  try {
    const response = await fetch(URL);
    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};
