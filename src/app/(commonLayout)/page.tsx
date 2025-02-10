import Banner from "@/components/Home/Banner";
import { Pattern } from "@/components/Home/Pattern";

export default function HomePage() {
  return (
    <div className="lg:max-w-screen-2xl relative p-4 mx-auto border-2 border-red-500">
      <Banner />
      <Pattern />
    </div>
  );
}
