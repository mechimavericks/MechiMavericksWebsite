import React from "react";
import { Column, Card, Text, Heading, Flex } from "@/once-ui/components";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  hackathon?: string;
  team?: string[];
  image?: string;
}

interface ProjectsProps {
  range?: [number, number];
  columns?: "1" | "2" | "3";
}

const projects: Project[] = [
  {
    title: "Smart Campus App",
    description:
      "A mobile application to enhance campus life with features like event management, resource sharing, and student networking.",
    technologies: ["React Native", "Firebase", "Node.js"],
    hackathon: "Annual Hackathon 2023",
    team: ["Team Mavericks"],
  },
  {
    title: "AI Learning Assistant",
    description:
      "An AI-powered learning platform that helps students with personalized study materials and practice questions.",
    technologies: ["Python", "TensorFlow", "React"],
    hackathon: "Tech Fest 2023",
    team: ["Team Mavericks"],
  },
  {
    title: "Community Portal",
    description:
      "A web portal for managing community events, workshops, and knowledge sharing sessions.",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    team: ["Team Mavericks"],
  },
];

export function Projects({
  range = [0, projects.length],
  columns = "1",
}: ProjectsProps) {
  const [start, end] = range;
  const displayedProjects = projects.slice(start - 1, end);

  return (
    <Column
      gap="m"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "var(--space-m)",
      }}
    >
      {displayedProjects.map((project, index) => (
        <Card key={index} padding="m">
          <Column gap="s">
            <Heading variant="heading-default-m">{project.title}</Heading>
            <Text variant="body-default-m">{project.description}</Text>
            <Flex gap="m" vertical="center" wrap>
              {project.technologies.map((tech, techIndex) => (
                <Text
                  key={techIndex}
                  variant="body-default-s"
                  onBackground="neutral-weak"
                >
                  {tech}
                </Text>
              ))}
            </Flex>
            {project.hackathon && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                Hackathon: {project.hackathon}
              </Text>
            )}
            {project.team && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                Team: {project.team.join(", ")}
              </Text>
            )}
          </Column>
        </Card>
      ))}
    </Column>
  );
}
