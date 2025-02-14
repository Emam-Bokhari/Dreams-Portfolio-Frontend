import DashboardSectionTitle from "@/components/dashboard/shared/DashboardSectionTitle";
import ProjectTable from "@/components/dashboard/project/ProjectTable";

export default function AllProjectsPage() {
  return (
    <div className="w-full">
      <DashboardSectionTitle title="Projects" />
      <ProjectTable />
    </div>
  );
}
