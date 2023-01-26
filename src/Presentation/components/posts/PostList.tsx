import PostItem from "./PostItem";
import { usePosts } from "@Services/usePosts";

const PostList = () => {
  const { listPosts } = usePosts();
  const { data, isLoading, isError, error } = listPosts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error as string}</div>;

  return (
    <div className="border border-white flex flex-col gap-3 p-4 rounded-md">
      {data!.map((d) => (
        <PostItem post={d} key={d.id} />
      ))}
    </div>
  );
};

export default PostList;
