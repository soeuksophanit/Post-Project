import { ProjectResponse } from "./project";

export type OwnerResponse = {
  ownerId: number;
  ownerName: string;
  profile: string;
  projects?: ProjectResponse[];
};
