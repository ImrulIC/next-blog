import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex space-x-6 my-5 text-lg mb-6">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}
