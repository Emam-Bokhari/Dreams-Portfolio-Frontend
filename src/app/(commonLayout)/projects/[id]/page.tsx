import ProjectDetails from "@/components/projects/ProjectDetails";
import SectionTitle from "@/components/shared/SectionTitle";
import { Fragment } from "react";

type ParamsProps = {
  params: { id: string };
};

export default async function ProjectDetailsPage({ params }: ParamsProps) {
  const { id } = params;
  //   console.log(id);
  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto ">
      <ProjectDetails />
    </div>
  );
}
