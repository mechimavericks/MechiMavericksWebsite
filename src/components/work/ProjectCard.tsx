"use client";

import React from "react";
import { Card, Column, Flex, Heading, Text } from "@/once-ui/components";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  hackathon?: string;
  team?: string[];
  image?: string;
  repoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card
      padding="m"
      onClick={() => project.repoUrl && window.open(project.repoUrl, "_blank")}
      style={{
        cursor: project.repoUrl ? "pointer" : "default",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        height: "100%", // Make all cards same height
        display: "flex",
        flexDirection: "column",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-xl)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <Column gap="m" style={{ flex: 1, justifyContent: "space-between" }}>
        {project.image && (
          <div
            style={{
              width: "100%",
              height: "180px", // Consistent height for images
              overflow: "hidden",
              borderRadius: "var(--radius-m)",
              marginBottom: "8px",
              background: "var(--neutral-alpha-weak)",
              position: "relative", // For proper image positioning
            }}
          >
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Maintain aspect ratio
                objectPosition: "center", // Center the image
              }}
            />
          </div>
        )}
        <Column gap="s" style={{ flex: 1 }}>
          <Flex horizontal="space-between" vertical="center">
            <Heading
              variant="heading-strong-m"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {project.title}
            </Heading>
            {project.repoUrl && (
              <Text
                variant="body-default-xs"
                onBackground="accent-weak"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  style={{ marginRight: "4px" }}
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                GitHub
              </Text>
            )}
          </Flex>
          <Text
            variant="body-default-m"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              height: "4.5em", // Approximately 3 lines of text
            }}
          >
            {project.description}
          </Text>
          <Flex gap="8" vertical="center" wrap marginTop="8">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <Text
                key={techIndex}
                variant="body-default-s"
                onBackground="brand-weak"
                style={{
                  padding: "4px 8px",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "var(--brand-alpha-weak)",
                  fontSize: "0.75rem",
                }}
              >
                {tech}
              </Text>
            ))}
            {project.technologies.length > 4 && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                +{project.technologies.length - 4}
              </Text>
            )}
          </Flex>
          {project.hackathon && (
            <Text
              variant="body-default-s"
              onBackground="accent-weak"
              marginTop="4"
            >
              🏆 {project.hackathon}
            </Text>
          )}
        </Column>
      </Column>
    </Card>
  );
};

export default ProjectCard;
