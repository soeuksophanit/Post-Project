import { ApiResponse } from "@/lib/types/api";
import { ProjectRequest } from "@/lib/types/project";
import { http } from "@/utils/http";

export const getAllProjects = async () => {
  const { data } = await http.get("/project");
  return data;
};

export const createProject = async (project: ProjectRequest) => {
  const { data } = await http.post<Promise<ApiResponse<{}>>>(
    "/project",
    project
  );
  return data;
};
