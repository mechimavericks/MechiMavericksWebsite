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
    <Column maxWidth="l" gap="xl" horizontal="center" paddingX="m">
      <Column fillWidth paddingY="l" gap="m">
        <Heading
          variant="display-strong-l"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            lineHeight: "1.2",
          }}
        >
          {work.title}
        </Heading>
        <Heading
          variant="heading-default-xl"
          onBackground="neutral-weak"
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
            lineHeight: "1.4",
          }}
        >
          {work.description}
        </Heading>
      </Column>
      <Projects />
    </Column>
  );
}
