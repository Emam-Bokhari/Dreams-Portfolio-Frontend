import Blogs from "@/components/blogs/Blogs";
import { Fragment } from "react";

export default function BlogsPage() {
  return (
    <Fragment>
      <div className="lg:max-w-screen-2xl p-4 mx-auto ">
        <Blogs />
      </div>
    </Fragment>
  );
}
