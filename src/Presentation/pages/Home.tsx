import PostList from "@components/posts/PostList";

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Posts</h1>

      <PostList />
    </div>
  );
};

export default Home;
