import { ApiResponse } from "@/lib/types/api";
import React from "react";
import CardProject from "./CardProject";
import { ProjectResponse } from "@/lib/types/project";

interface Props {
  data: ApiResponse<ProjectResponse[]>;
}

const CardList = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-6 my-10">
      {data?.data?.map((project, idx) => (
        <CardProject key={idx} project={project} />
      ))}
    </div>
  );
};

export default CardList;
