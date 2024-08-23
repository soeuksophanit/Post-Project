import { ProjectResponse } from "@/lib/types/project";
import { src } from "@/utils/image";
import Image from "next/image";
import React from "react";

interface Props {
  project: ProjectResponse;
}

const CardProject = ({ project }: Props) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <Image
          alt={project?.projectDescription}
          width={1000}
          height={1000}
          src={src(project.projectImg)}
          priority
          className="h-[300px] object-cover !w-full rounded-sm"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold">{project?.projectName}</p>
        <p className="text-sm">{project?.projectDescription}</p>
      </div>
    </div>
  );
};

export default CardProject;
