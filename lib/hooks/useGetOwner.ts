import { getAllOwner } from "@/service/owner/owner.service";
import { useQuery } from "@tanstack/react-query";

export const useGetOwner = () =>
  useQuery({
    queryKey: ["owners"],
    queryFn: getAllOwner,
  });
