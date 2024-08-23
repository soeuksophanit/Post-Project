import { http } from "@/utils/http";
import axios from "axios";

export const postImg = async (img: any) => {
  const formData = new FormData();
  formData.append("file", img);
  const { data } = await http.post("/file", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log("data ", data);
  return data;
};
