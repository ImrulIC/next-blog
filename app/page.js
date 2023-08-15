import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1 className=" font-medium text-xl my-4">
        Welcome to the most popular Blog Site in the community!
      </h1>
      <p>
        Check out the all the latest{" "}
        <Link className="  underline" href="/blog">
          Blog Posts
        </Link>{" "}
        here.
      </p>
    </div>
  );
}
