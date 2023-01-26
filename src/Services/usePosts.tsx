import { Post } from "@models/Post";
import { list } from "@Data/post.data";
import { useQuery } from "@tanstack/react-query";

export const usePosts = () => {
  const listPosts = () => {
    const { data, isLoading, isError, error } = useQuery<Post[]>({
      queryKey: ["posts"],
      queryFn: () => list(),
    });

    return {
      data,
      isLoading,
      isError,
      error,
    };
  };

  return {
    listPosts,
  };
};
