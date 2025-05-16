"use client";

import React, { useState, useEffect } from "react";
import {
  Column,
  Card,
  Text,
  Heading,
  Flex,
  Button,
} from "@/once-ui/components";
import styles from "./Teams.module.scss";
import teamCategories from "@/data/teamData";
interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
    facebook?: string;
  };
}

// Team member card component without onClick handler
const TeamMemberCard = ({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) => {
  return (
    <Card
      padding="m"
      className={`${styles["team-card"]} ${styles["fade-in"]}`}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <Column gap="m" horizontal="center" style={{ width: "100%" }}>
        <Flex horizontal="center" marginBottom="m" style={{ width: "100%" }}>
          <div className={styles.avatarContainer}>
            <img
              src={member.image || `/images/teams/placeholder.jpg`}
              alt={`${member.name}`}
              className={styles.avatar}
            />
          </div>
        </Flex>
        <Column gap="s" horizontal="center" style={{ width: "100%" }}>
          <Heading
            variant="heading-strong-m"
            className={styles.memberName}
            style={{ textAlign: "center" }}
          >
            {member.name}
          </Heading>
          <Text
            variant="body-default-s"
            onBackground="accent-weak"
            className={styles.role}
            style={{ textAlign: "center" }}
          >
            {member.role}
          </Text>

          {member.socialLinks && (
            <Flex horizontal="center" gap="m" marginTop="s">
              {member.socialLinks.github && (
                <a
                  href={member.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              )}
              {member.socialLinks.linkedin && (
                <a
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
              {member.socialLinks.twitter && (
                <a
                  href={member.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}{" "}
              {member.socialLinks.email && (
                <a
                  href={`mailto:${member.socialLinks.email}`}
                  className={styles.socialIcon}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              )}
              {member.socialLinks.facebook && (
                <a
                  href={member.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                  </svg>
                </a>
              )}
            </Flex>
          )}
        </Column>
      </Column>
    </Card>
  );
};

interface TeamsProps {
  category?: string;
}

export function Teams({ category }: TeamsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check scroll position to show/hide scroll-to-top button
  useEffect(() => {
    const checkScrollPosition = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // Filter categories by name if provided
  const filteredCategories = category
    ? teamCategories.filter((cat) =>
        cat.title.toLowerCase().includes(category.toLowerCase())
      )
    : teamCategories;

  // Check if we're showing only Executive Members (for special grid styling)
  const isExecutiveOnly =
    filteredCategories.length === 1 &&
    filteredCategories[0].title === "Executive Members";

  return (
    <div className={styles.teamsContainer}>
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={styles.categorySection}>
            <Heading
              variant="heading-strong-xl"
              className={styles.categoryTitle}
            >
              {category.title}
            </Heading>{" "}
            <div
              className={`${styles.teamsGrid} ${
                category.members.length < 3 && !isExecutiveOnly
                  ? styles.fewCards
                  : ""
              }`}
              style={
                isExecutiveOnly
                  ? {
                      display: "flex",
                      gap: "2rem",
                    }
                  : {}
              }
            >
              {category.members.map((member, memberIndex) => (
                <TeamMemberCard
                  key={memberIndex}
                  member={member}
                  index={memberIndex}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className={styles.noResults}>
          <Text variant="body-default-l" style={{ textAlign: "center" }}>
            No team members found in this category.
          </Text>
        </div>
      )}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className={styles.scrollTopButton}
          prefixIcon="arrow-up"
          variant="primary"
        />
      )}
    </div>
  );
}
