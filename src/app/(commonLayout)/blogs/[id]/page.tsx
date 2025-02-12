import BlogDetails from "@/components/blogs/BlogDetails";

// type ParamsProps = {
//   params: { id: string };
// };

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // console.log(id);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${id}`,
    {
      cache: "no-store",
    }
  );
  const result = await response.json();
  // console.log(result.data);
  const blog = result?.data;
  // console.log(blog);
  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto ">
      <BlogDetails blog={blog} />
    </div>
  );
}
