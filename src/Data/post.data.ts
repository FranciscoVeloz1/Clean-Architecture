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

export const create = async (post: Post): Promise<Post> => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(post),
    });
    const data: Post = await response.json();
    return data;
  } catch (error) {
    return {
      id: 0,
      userId: 0,
      title: "Error",
      body: error instanceof Error ? error.message : "Unknow error",
    };
  }
};
