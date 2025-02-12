import Banner from "@/components/home/Banner";
import FeaturedProject from "@/components/home/FeaturedProject";
import { Pattern } from "@/components/home/Pattern";
import Skills from "@/components/home/Skills";

export default async function HomePage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/projects/featured-project`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch featured project data!");
  }
  const result = await response.json();
  const featuredProject = result?.data;
  // console.log(featuredProject);

  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto border-2 border-red-500">
      <Banner />
      <Pattern />
      <Skills />
      <FeaturedProject featuredProject={featuredProject} />
    </div>
  );
}
