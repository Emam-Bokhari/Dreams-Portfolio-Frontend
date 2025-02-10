import Banner from "@/components/Home/Banner";
import FeaturedProject from "@/components/Home/FeaturedProject";
import { Pattern } from "@/components/Home/Pattern";
import Skills from "@/components/Home/Skills";

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
