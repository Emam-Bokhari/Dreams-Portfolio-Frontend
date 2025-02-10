import SectionTitle from "../shared/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { skills } from "./SkillData";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div className="border-2 border-green-500 mt-10">
      {/* Section Title */}
      <SectionTitle title="My Skills & Tools" />

      {/* Tabs Section */}
      <Tabs defaultValue="frontend" className="w-full mt-4 border-2">
        {/* Tabs List */}
        <TabsList className="flex justify-center gap-4 dark:bg-[#110E18]">
          {Object.keys(skills)?.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="capitalize  hover:text-[#8750F7] transition-all duration-300 focus:text-[#8750F7]"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="relative w-full ">
          {Object.entries(skills).map(([category, skillList]) => (
            <TabsContent
              key={category}
              value={category}
              className="absolute top-0 left-0 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-opacity duration-300 border-2 border-red-500"
            >
              {skillList.map((skill) => (
                <SkillCard key={skill?.id} skill={skill} />
              ))}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
