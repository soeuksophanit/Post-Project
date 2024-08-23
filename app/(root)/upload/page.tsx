"use client";
import { ProjectRequest } from "@/lib/types/project";
import { postImg } from "@/service/file/file.service";
import { createProject } from "@/service/project/project.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const PageUpload = () => {
  const [img, setImg] = useState<{
    img: any;
    imgPreview: any;
  }>({ img: null, imgPreview: null });

  const { register, handleSubmit } = useForm<{
    projectName: string;
    projectDescription: string;
  }>();

  const router = useRouter();
  const qClient = useQueryClient();
  const { mutate: createPro } = useMutation({
    mutationFn: async (data: ProjectRequest) => {
      const result = await createProject(data);
      if (result.status.code == 200) {
        toast.success(`Post new project`);
        router.push("/");
      } else toast.error("Error");
    },
    onSettled: async () => {
      return await qClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  const onSubmit: SubmitHandler<{
    projectName: string;
    projectDescription: string;
  }> = async (data) => {
    const result = await postImg(img.img);
    console.log("result ", result?.data?.fileName);
    const project = { ...data, userId: 1, projectImg: result?.data?.fileName };
    createPro(project);
  };

  useEffect(() => {
    console.log(img);
  }, [img]);
  return (
    <div className="my-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Upload Project Detail
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Project title
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      {...register("projectName", { required: true })}
                      type="text"
                      placeholder="janesmith"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    {...register("projectDescription", { required: true })}
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about the project.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className=" flex justify-between text-sm font-medium leading-6 text-gray-900"
                >
                  <span>Project Image</span>
                  {img.img != null && (
                    <span
                      onClick={() => setImg({ img: null, imgPreview: null })}
                      className="bg-gray-300 py-1 px-3 rounded-sm"
                    >
                      Clear
                    </span>
                  )}
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  {!img.img ? (
                    <div className="text-center">
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                setImg({
                                  img: file,
                                  imgPreview: URL.createObjectURL(file),
                                });
                              }
                            }}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  ) : (
                    <Image
                      width={1000}
                      height={1000}
                      src={img.imgPreview!}
                      alt="img project"
                      className="w-full  h-[400px] object-cover rounded-sm"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link
            href={"/"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PageUpload;
