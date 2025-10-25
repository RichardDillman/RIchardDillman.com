import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/data/experience";

export default function ExperienceList() {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </div>
  );
}
