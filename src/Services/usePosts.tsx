import { FormEvent } from "react";
import { Post } from "@models/Post";
import { list, create } from "@Data/post.data";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const usePosts = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  //List all posts
  const listPosts = () => {
    const { data, isLoading, isError, error } = useQuery<Post[]>({
      queryKey: ["posts"],
      queryFn: () => list(),
      select: (posts) => posts.slice(0, 10),
    });

    return {
      data,
      isLoading,
      isError,
      error,
    };
  };

  //Create one post
  const createPost = useMutation({
    mutationFn: create,
    onSuccess: () => {
      navigate(-1);
      alert("Post added");
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const elements = Object.fromEntries(formData);
    //@ts-ignore
    createPost.mutate(elements);
  };

  return {
    listPosts,
    handleSubmit,
  };
};
