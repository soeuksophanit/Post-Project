import { getAllProjects } from "@/service/project/project.service";
import { useQuery } from "@tanstack/react-query";

export const useFetchProjects = () =>
  useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
  });
