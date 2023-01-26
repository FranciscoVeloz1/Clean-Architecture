import { usePosts } from "@Services/usePosts";

const Add = () => {
  const { handleSubmit } = usePosts();

  return (
    <div className="w-4/12 mx-auto">
      <p className="text-center text-2xl font-bold mb-4">Add post</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="ID"
          name="id"
          className="p-2 rounded-md text-black"
        />

        <input
          type="text"
          placeholder="ID User"
          name="userId"
          className="p-2 rounded-md text-black"
        />

        <input
          type="text"
          placeholder="Title"
          name="title"
          className="p-2 rounded-md text-black"
        />

        <input
          type="text"
          placeholder="Body"
          name="body"
          className="p-2 rounded-md text-black"
        />

        <button type="submit" className="text-lg py-2 bg-blue-500 rounded-md">
          Send
        </button>
      </form>
    </div>
  );
};

export default Add;
