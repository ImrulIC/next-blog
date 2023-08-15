import blogData from "../../data/blogData.json";

export default function page({ params }) {
  const id = params.id;
  const data = blogData;
  let post = data.find((item) => item.id == id);

  return (
    <div className=" text-justify mb-3" key={post.id}>
      <h1 className="mb-2 font-bold text-lg">{post.title}</h1>
      <h3 className="mb-2 font-medium">posted on {post.date}</h3>
      <p>{post.content}</p>
    </div>
  );
}
