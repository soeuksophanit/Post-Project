"use client";

import CardList from "@/components/ui/root/CardList";
import { useFetchProjects } from "@/lib/hooks/useFetchProjects";
import { useGetOwner } from "@/lib/hooks/useGetOwner";

export default function Home() {
  const { data: owners, isLoading } = useGetOwner();
  const { data: projects } = useFetchProjects();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <CardList data={projects} />
    </div>
  );
}
