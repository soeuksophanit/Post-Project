"use client";
import { useGetOwner } from "@/lib/hooks/useGetOwner";
import { src } from "@/utils/image";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  const { isLoading, data } = useGetOwner();
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="my-10">
      <div>
        <h1 className="text-center text-lg ">About Me</h1>
        <div>
          <div className="mx-auto mt-6 rounded-lg">
            <Image
              alt={"profile"}
              width={1000}
              height={1000}
              src={src(data?.data?.[0].profile!)}
              priority
              className="h-[300px] w-[250px] object-cover mx-auto rounded-sm"
            />
          </div>
          <p className="text-center mt-4 text-xl font-bold">
            {data?.data?.[0].ownerName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
