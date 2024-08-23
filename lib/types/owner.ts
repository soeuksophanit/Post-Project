import { ProjectResponse } from "./project";

export type OwnerResponse = {
  ownerId: number;
  ownerName: string;
  projects?: ProjectResponse[];
};
