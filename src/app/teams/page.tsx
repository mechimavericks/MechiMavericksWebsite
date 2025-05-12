"use client";

import React, { useState } from "react";
import { Column, Heading, Text, Flex, Chip } from "@/once-ui/components";
import { Teams } from "@/components/teams/Teams";
import { teams } from "@/app/resources/content";

export default function TeamsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Team categories for filter
  const categories = [
    "All",
    "Leadership",
    "Vice President & Secretaries",
    "Tech Team",
    "Graphics & Design",
    "Executive Members",
  ];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category === "All" ? null : category);
  };

  return (
    <Column maxWidth="xl" gap="xl" horizontal="center" paddingX="m">
      <Column fillWidth paddingY="l" gap="s" horizontal="center">
        <Heading
          variant="display-strong-l"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            lineHeight: "1.2",
            textAlign: "center",
          }}
        >
          {teams.title}
        </Heading>
        <Heading
          variant="heading-default-xl"
          onBackground="neutral-weak"
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
            lineHeight: "1.4",
            textAlign: "center",
            maxWidth: "800px",
            marginBottom: "1rem",
          }}
        >
          {teams.description}
        </Heading>
        <Text
          variant="body-default-m"
          onBackground="accent-weak"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            textAlign: "center",
            maxWidth: "600px",
            marginBottom: "2rem",
          }}
        >
          The leadership behind Mechi Mavericks
        </Text>

        {/* Responsive filter buttons */}
        <Flex
          horizontal="center"
          wrap={true}
          style={{
            maxWidth: "100%",
            width: "100%",
            padding: "var(--space-m) var(--space-xs)",
            gap: "var(--space-xs)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              selected={
                activeCategory === (category === "All" ? null : category)
              }
              onClick={() => handleCategoryClick(category)}
              style={{
                cursor: "pointer",
                margin: "0.25rem",
                fontSize:
                  category === "Vice President & Secretaries"
                    ? "clamp(0.7rem, 2vw, 0.85rem)"
                    : "clamp(0.75rem, 3vw, 0.9rem)",
              }}
            />
          ))}
        </Flex>
      </Column>
      <Teams category={activeCategory || undefined} />
    </Column>
  );
}
