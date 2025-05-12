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

// Team member type definition
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
  };
}

// Team member card component with onClick handler
const TeamMemberCard = ({
  member,
  index,
  onClick,
}: {
  member: TeamMember;
  index: number;
  onClick: () => void;
}) => {
  return (
    <Card
      padding="m"
      className={`${styles["team-card"]} ${styles["fade-in"]}`}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <Column gap="m">
        {" "}
        <Flex horizontal="center" marginBottom="m">
          {/* Using regular img tag instead of Avatar component to avoid Next.js image domain issues */}
          <div className={styles.avatarContainer}>
            <img
              src={member.image || `/images/teams/placeholder.jpg`}
              alt={`${member.name}`}
              className={styles.avatar}
            />
          </div>
        </Flex>{" "}
        <Column gap="s" style={{ textAlign: "center" }}>
          <Heading variant="heading-strong-m" className={styles.memberName}>
            {member.name}
          </Heading>
          <Text
            variant="body-default-s"
            onBackground="accent-weak"
            className={styles.role}
          >
            {member.role}
          </Text>
          <Text variant="body-default-m" className={styles.description}>
            {member.description}
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
              )}
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

// Define team categories and their members
const teamCategories = [
  {
    title: "Leadership",
    members: [
      {
        name: "Prashant Kafle",
        role: "President",
        description:
          "Leading the Mechi Mavericks community with a focus on growth and impact.",
        image: "/images/teams/placeholder.jpg",
        socialLinks: {
          github: "https://github.com/prashant-kafle",
          linkedin: "https://linkedin.com/in/prashant-kafle",
          email: "prashant@mechimavericks.tech",
        },
      },
    ],
  },
  {
    title: "Vice President & Secretaries",
    members: [
      {
        name: "Ashes Pokhrel",
        role: "Vice President",
        description:
          "Assisting the president and overseeing operational activities.",
        image: "/images/teams/placeholder.jpg",
        socialLinks: {
          linkedin: "https://linkedin.com/in/ashes-pokhrel",
          email: "ashes@mechimavericks.tech",
        },
      },
      {
        name: "Bishal Pulami Magar",
        role: "Secretary",
        description: "Managing administrative tasks and maintaining records.",
        image: "/images/teams/placeholder.jpg",
        socialLinks: {
          linkedin: "https://linkedin.com/in/bishal-pulami",
          email: "bishal@mechimavericks.tech",
        },
      },
      {
        name: "Sanket Shiwakoti",
        role: "Vice Secretary",
        description:
          "Supporting the secretary in documentation and communication.",
        image: "/images/teams/placeholder.jpg",
        socialLinks: {
          github: "https://github.com/sanket-shiwakoti",
          email: "sanket@mechimavericks.tech",
        },
      },
      {
        name: "Kiran Sitoula",
        role: "Treasurer",
        description: "Managing financial aspects and budget planning.",
        image: "/images/teams/placeholder.jpg",
        socialLinks: {
          linkedin: "https://linkedin.com/in/kiran-sitoula",
          email: "kiran@mechimavericks.tech",
        },
      },
    ],
  },
  {
    title: "Tech Team",
    members: [
      {
        name: "Santosh Bhandari",
        role: "Tech Lead",
        description: "Leading technical initiatives and technology adoption.",
        image: "/images/teams/placeholder.jpg",
        socialLinks: {
          github: "https://github.com/santosh-bhandari",
          linkedin: "https://linkedin.com/in/santosh-bhandari",
          email: "santosh@mechimavericks.tech",
        },
      },
      {
        name: "Shameer Kharel",
        role: "Tech Member",
        description:
          "Contributing to technical projects and software development.",
        image: "/images/teams/placeholder.jpg",
        socialLinks: {
          github: "https://github.com/shameer-kharel",
          email: "shameer@mechimavericks.tech",
        },
      },
      {
        name: "Yangsing Hang Ignam",
        role: "Tech Member",
        description: "Working on web development and programming projects.",
        image: "/images/teams/placeholder.jpg",
        socialLinks: {
          github: "https://github.com/yangsing",
          linkedin: "https://linkedin.com/in/yangsing",
          email: "yangsing@mechimavericks.tech",
        },
      },
    ],
  },
  {
    title: "Graphics & Design",
    members: [
      {
        name: "Manish Pradhan",
        role: "Graphics Lead",
        description: "Leading design efforts and visual identity development.",
        image: "/images/teams/placeholder.jpg",
        socialLinks: {
          linkedin: "https://linkedin.com/in/manish-pradhan",
          email: "manish@mechimavericks.tech",
        },
      },
      {
        name: "Utsav Ghimire",
        role: "Graphics Member",
        description: "Creating visual content and graphic materials.",
        image: "/images/teams/placeholder.jpg",
        socialLinks: {
          email: "utsav@mechimavericks.tech",
        },
      },
      {
        name: "Rishika Adhikari",
        role: "Graphics Member",
        description: "Designing promotional materials and digital assets.",
        image: "/images/teams/placeholder.jpg",
        socialLinks: {
          email: "rishika@mechimavericks.tech",
        },
      },
    ],
  },
  {
    title: "Executive Members",
    members: [
      {
        name: "Manish Raut",
        role: "Executive Member",
        description:
          "Contributing to community initiatives and event planning.",
        image: "/images/teams/placeholder.jpg",
        socialLinks: {
          email: "manishr@mechimavericks.tech",
        },
      },
      {
        name: "Rahul Bastola",
        role: "Executive Member",
        description: "Assisting in community outreach and partnerships.",
        image: "/images/teams/placeholder.jpg",
        socialLinks: {
          email: "rahul@mechimavericks.tech",
        },
      },
      {
        name: "Dibya Laxmi Limbu",
        role: "Executive Member",
        description: "Coordinating events and member engagement activities.",
        image: "/images/teams/placeholder.jpg",
        socialLinks: {
          email: "dibya@mechimavericks.tech",
        },
      },
    ],
  },
];

export function Teams({ category }: TeamsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Handle card click to open modal
  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className={styles.teamsContainer}>
      {filteredCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className={styles.categorySection}>
          <Heading variant="heading-strong-xl" className={styles.categoryTitle}>
            {category.title}
          </Heading>
          <div className={styles.teamsGrid}>
            {category.members.map((member, memberIndex) => (
              <TeamMemberCard
                key={memberIndex}
                member={member}
                index={memberIndex}
                onClick={() => handleCardClick(member)}
              />
            ))}
          </div>
        </div>
      ))}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className={styles.scrollTopButton}
          prefixIcon="arrow-up"
          variant="primary"
        />
      )}{" "}
      {/* Modal for team member details */}
      {selectedMember && isModalOpen && (
        <div className={styles.modalOverlay} onClick={handleModalClose}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              onClick={handleModalClose}
              className={styles.modalCloseButton}
              variant="tertiary"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </Button>

            <div className={styles.modalInner}>
              <div className={styles.modalHeader}>
                <div className={styles.modalImageWrapper}>
                  <img
                    src={
                      selectedMember.image || `/images/teams/placeholder.jpg`
                    }
                    alt={selectedMember.name}
                    className={styles.modalImage}
                  />
                </div>
                <div>
                  <Heading variant="heading-strong-l">
                    {selectedMember.name}
                  </Heading>
                  <Text variant="body-strong-l" onBackground="accent-strong">
                    {selectedMember.role}
                  </Text>
                </div>
              </div>

              <Text
                variant="body-default-l"
                className={styles.modalDescription}
              >
                {selectedMember.description}
              </Text>

              {selectedMember.socialLinks && (
                <div className={styles.modalSocialLinks}>
                  <Text variant="body-strong-m">
                    Connect with {selectedMember.name}:
                  </Text>
                  <div className={styles.socialIconsContainer}>
                    {selectedMember.socialLinks.github && (
                      <a
                        href={selectedMember.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.modalSocialIcon}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                      </a>
                    )}
                    {selectedMember.socialLinks.linkedin && (
                      <a
                        href={selectedMember.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.modalSocialIcon}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                    {selectedMember.socialLinks.twitter && (
                      <a
                        href={selectedMember.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.modalSocialIcon}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    )}
                    {selectedMember.socialLinks.email && (
                      <a
                        href={`mailto:${selectedMember.socialLinks.email}`}
                        className={styles.modalSocialIcon}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </a>
                    )}{" "}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
