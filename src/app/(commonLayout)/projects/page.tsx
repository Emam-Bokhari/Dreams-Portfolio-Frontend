import Projects from "@/components/projects/projects";

export default async function ProjectsPage() {
  const response = await fetch("http://localhost:5000/api/v1/projects", {
    next: { revalidate: 30 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch projects data!");
  }
  const result = await response.json();
  const projects = result?.data || [];

  console.log(projects);
  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto ">
      <Projects projects={projects} />
    </div>
  );
}
