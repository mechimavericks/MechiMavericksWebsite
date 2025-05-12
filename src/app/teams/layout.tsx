import React from "react";
import { teams } from "@/app/resources/content";

export async function generateMetadata() {
  return {
    title: teams.title,
    description: teams.description,
  };
}

export default function TeamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
