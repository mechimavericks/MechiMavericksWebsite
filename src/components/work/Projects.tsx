"use client";

import React from "react";
import { Column, Card, Text, Heading, Flex } from "@/once-ui/components";
import styles from "./Projects.module.scss";

// Project type definition
interface Project {
  title: string;
  description: string;
  technologies: string[];
  hackathon?: string;
  team?: string[];
  image?: string;
  repoUrl?: string; // GitHub repository URL
}

// Single project card component that handles click events
const ProjectCard = ({ project }: { project: Project }) => {
  const handleClick = () => {
    if (project.repoUrl) {
      window.open(project.repoUrl, "_blank");
    }
  };

  // Generate project initials for the placeholder
  const getInitials = (title: string) => {
    return title
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 3);
  };

  return (
    <Card
      padding="m"
      onClick={handleClick}
      style={{
        cursor: project.repoUrl ? "pointer" : "default",
        height: "100%", // Ensure consistent height
      }}
      className={project.repoUrl ? styles["project-card"] : ""}
    >
      <Column gap="m" style={{ height: "100%" }}>
        {project.image ? (
          project.image.trim() !== "" ? (
            <div className={styles.imageContainer}>
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  e.currentTarget.src = "/images/projects/placeholder.jpg";
                  e.currentTarget.onerror = null;
                }}
              />
            </div>
          ) : (
            <div className={styles.imagePlaceholder}>
              <div className={styles.placeholderPattern}></div>
              <div className={styles.placeholderText}>
                {getInitials(project.title)}
              </div>
            </div>
          )
        ) : (
          <div className={styles.imagePlaceholder}>
            <div className={styles.placeholderPattern}></div>
            <div className={styles.placeholderText}>
              {getInitials(project.title)}
            </div>
          </div>
        )}
        <Column
          gap="s"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Flex horizontal="space-between" vertical="center">
              <h3 className={styles.cardTitle}>{project.title}</h3>
              {project.repoUrl && (
                <Text
                  variant="body-default-xs"
                  onBackground="accent-weak"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
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
            <div className={styles.cardDescription}>{project.description}</div>
          </div>

          <div>
            <div className={styles.techTagsContainer}>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
            {project.hackathon && (
              <Text
                variant="body-default-s"
                onBackground="accent-weak"
                marginTop="4"
              >
                🏆 {project.hackathon}
              </Text>
            )}
            {project.team && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                👥 {project.team.join(", ")}
              </Text>
            )}
          </div>
        </Column>
      </Column>
    </Card>
  );
};

interface ProjectsProps {
  range?: [number, number];
  columns?: "1" | "2" | "3";
}

const projects: Project[] = [
  {
    title: "KrisiConnect",
    description:
      "An innovative agricultural platform bridging farmers, agricultural experts, and consumers with IoT integration for monitoring soil health and crop data.",
    technologies: [
      "Laravel",
      "Python",
      "Arduino",
      "IoT",
      "YOLOv8",
      "LangChain",
    ],
    team: ["Mechi Mavericks"],
    image: "",
    repoUrl: "https://github.com/mechimavericks/KrisiConnect",
  },
  {
    title: "WordToNumber",
    description:
      "A Python library that converts word representations of numbers to their numerical values, supporting American, Indian, and Nepali numbering systems.",
    technologies: ["Python", "NLP"],
    team: ["Mechi Mavericks"],
    image: "",
    repoUrl: "https://github.com/mechimavericks/WordToNumber",
  },
  {
    title: "moment.np",
    description:
      "A MomentJS-like package for handling dates in Nepali format, supporting Bikram Sambat (BS) calendar conversion and Nepali date formatting.",
    technologies: ["JavaScript", "NodeJS", "NPM Package"],
    team: ["Mechi Mavericks"],
    image: "",
    repoUrl: "https://github.com/mechimavericks/moment.np",
  },
  {
    title: "BCA-Association",
    description:
      "Official website for the BCA Association at Mechi Multiple Campus, providing resources, events, and community support for BCA students.",
    technologies: ["JavaScript", "HTML", "CSS"],
    team: ["Mechi Mavericks"],
    image: "/images/projects/Logo_BCA_Association.png",
    repoUrl: "https://github.com/mechimavericks/BCA-Association",
  },
  {
    title: "RoadSensee",
    description:
      "A real-time accident detection system that integrates with CCTV cameras using machine learning to detect road accidents and alert authorities immediately.",
    technologies: [
      "Next.js",
      "Python",
      "YOLOv8",
      "Flask",
      "Socket.io",
      "Machine Learning",
    ],
    team: ["Mechi Mavericks"],
    image: "",
    repoUrl: "https://github.com/mechimavericks/roadsensee",
  },
];

export function Projects({
  range = [0, projects.length],
  columns = "2", // Changed default to 2 columns
}: ProjectsProps) {
  const [start, end] = range;
  const displayedProjects =
    start === 0 ? projects.slice(0, end) : projects.slice(start - 1, end);

  return (
    <div className={styles.projectsGrid}>
      {displayedProjects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
