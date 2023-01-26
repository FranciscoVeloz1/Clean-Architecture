import { Post } from "@models/Post";

const PostItem = ({ post }: { post: Post }) => {
  return (
    <div>
      <p className="text-xl font-bold">{post.title}</p>
      <p className="text-lg">{post.body}</p>
    </div>
  );
};

export default PostItem;
