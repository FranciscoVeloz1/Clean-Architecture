import { Post } from "@models/Post";
import { list } from "@Data/post.data";
import { useQuery } from "@tanstack/react-query";
import PostItem from "./PostItem";

const PostList = () => {
  const { data, isLoading, isError, error } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: () => list(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error as string}</div>;

  return (
    <div>
      {data.slice(0, 10).map((d) => (
        <PostItem post={d} />
      ))}
    </div>
  );
};

export default PostList;
