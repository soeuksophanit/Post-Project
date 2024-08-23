import { ApiResponse } from "@/lib/types/api";
import { OwnerResponse } from "@/lib/types/owner";
import { http } from "@/utils/http";

export const getAllOwner = async (): Promise<ApiResponse<OwnerResponse[]>> => {
  const { data } = await http.get("/owner/info");
  return data;
};
