import { Post } from "@models/Post";

const PostItem = ({ post }: { post: Post }) => {
  return (
    <div className="mt-4">
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </div>
  );
};

export default PostItem;
