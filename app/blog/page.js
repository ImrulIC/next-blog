import React from "react";
import blogData from "../data/blogData.json";
import Link from "next/link";
export default function page() {
  const data = blogData;

  return (
    <div>
      <h1 className="font-medium text-xl my-4">Latest Blog Posts</h1>
      {data.map((item) => {
        const { id, title } = item;
        return (
          <p className=" mb-3" key={id}>
            <Link href={`/blog/${id}`}>
              {id} - {title}
            </Link>
          </p>
        );
      })}
    </div>
  );
}
