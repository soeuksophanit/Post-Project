import { ApiResponse } from "@/lib/types/api";
import React from "react";
import CardProject from "./CardProject";
import { ProjectResponse } from "@/lib/types/project";
import Image from "next/image";

interface Props {
  data: ApiResponse<ProjectResponse[]>;
}

const CardList = ({ data }: Props) => {
  if (!data?.data?.length) {
    return (
      <div className="p-6 size-[30%] mx-auto">
        <Image
          src={"/no.png"}
          width={1000}
          height={1000}
          alt="no project"
          className="w-full h-full oject-cover"
        />
        <p className="text-center">No project</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-6 my-10">
      {data?.data?.map((project, idx) => (
        <CardProject key={idx} project={project} />
      ))}
    </div>
  );
};

export default CardList;
