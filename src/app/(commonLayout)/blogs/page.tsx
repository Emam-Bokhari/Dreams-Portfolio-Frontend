import Blogs from "@/components/blogs/Blogs";
import { Fragment } from "react";

export default async function BlogsPage() {
  const response = await fetch(`${process.env.BASE_URL}/blogs`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch blogs data!");
  }
  const result = await response.json();
  const blogs = result?.data || [];
  console.log(blogs);
  return (
    <Fragment>
      <div className="lg:max-w-screen-2xl p-4 mx-auto ">
        <Blogs blogs={blogs} />
      </div>
    </Fragment>
  );
}
