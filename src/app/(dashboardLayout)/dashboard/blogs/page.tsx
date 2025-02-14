import BlogTable from "@/components/dashboard/blog/BlogTable";
import DashboardSectionTitle from "@/components/dashboard/shared/DashboardSectionTitle";

export default function AllBlogsPage() {
  return (
    <div className="w-full">
      <DashboardSectionTitle title="Blogs" />
      <BlogTable />
    </div>
  );
}
