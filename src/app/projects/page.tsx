import React from "react";
import { Column, Heading } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { work } from "@/app/resources/content";

export async function generateMetadata() {
  return {
    title: work.title,
    description: work.description,
  };
}

export default function ProjectsPage() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Column fillWidth paddingY="l" gap="m">
        <Heading variant="display-strong-l">{work.title}</Heading>
        <Heading variant="heading-default-xl" onBackground="neutral-weak">
          {work.description}
        </Heading>
      </Column>
      <Projects />
    </Column>
  );
}
