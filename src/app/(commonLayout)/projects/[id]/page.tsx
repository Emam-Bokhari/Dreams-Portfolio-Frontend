import ProjectDetails from "@/components/projects/ProjectDetails";

type ParamsProps = {
  params: { id: string };
};

export default async function ProjectDetailsPage({ params }: ParamsProps) {
  const { id } = params;
  //   console.log(id);
  const response = await fetch(`http://localhost:5000/api/v1/projects/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch project details data!");
  }
  const result = await response.json();
  const project = result?.data || {};
  console.log(project);
  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto ">
      <ProjectDetails project={project} />
    </div>
  );
}
