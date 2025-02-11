import Banner from "@/components/home/Banner";
import FeaturedProject from "@/components/home/FeaturedProject";
import { Pattern } from "@/components/home/Pattern";
import Skills from "@/components/home/Skills";

export default function HomePage() {
  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto border-2 border-red-500">
      <Banner />
      <Pattern />
      <Skills />
      <FeaturedProject />
    </div>
  );
}
