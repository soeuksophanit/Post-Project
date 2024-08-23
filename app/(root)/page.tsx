"use client";

import CardList from "@/components/ui/root/CardList";
import { useFetchProjects } from "@/lib/hooks/useFetchProjects";
import { useGetOwner } from "@/lib/hooks/useGetOwner";

export default function Home() {
  const { data: owners } = useGetOwner();
  const { data: projects } = useFetchProjects();

  console.log(owners, projects);
  return (
    <div>
      <CardList data={projects} />
    </div>
  );
}
