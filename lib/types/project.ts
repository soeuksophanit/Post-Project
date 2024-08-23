export type ProjectResponse = {
  userId: number;
  projectId: number;
  projectName: string;
  projectDescription: string;
  projectImg: string;
};

export type ProjectRequest = {
  userId: number;
  projectName: string;
  projectDescription: string;
  projectImg: string;
};
