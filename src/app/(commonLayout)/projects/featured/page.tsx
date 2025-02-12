import ProjectDetails from "@/components/shared/ProjectDetails";
import SectionTitle from "@/components/shared/SectionTitle";

export default async function FeaturedProjectDetailsPage() {
  const response = await fetch(
    `${process.env.BASE_URL}/projects/featured-project`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch featured project data!");
  }
  const result = await response.json();
  const project = result?.data;
  //   console.log(project);
  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto border-2 border-red-500">
      <SectionTitle title="Featured Project Details" />
      <ProjectDetails project={project} />
    </div>
  );
}
