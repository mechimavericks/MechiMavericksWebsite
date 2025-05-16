import React from "react";
import Image from "next/image";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Arrow,
  Column,
  Card,
} from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { Events } from "@/components/events/Events";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            location: {
              "@type": "Place",
              name: person.location,
            },
          }),
        }}
      />
      <Column fillWidth paddingY="l" gap="m">
        <Flex fillWidth mobileDirection="column">
          <Flex
            flex={1}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <RevealFx translateY="4" fillWidth style={{ textAlign: "center" }}>
              <Image
                src="/logo.svg"
                alt="Mechi Mavericks Logo"
                width={200}
                height={200}
                style={{ maxWidth: "100%" }}
              />
            </RevealFx>
          </Flex>
          <Column flex={2} maxWidth="s">
            <RevealFx
              translateY="8"
              fillWidth
              horizontal="start"
              paddingBottom="m"
            >
              <Heading wrap="balance" variant="display-strong-l">
                {home.headline}
              </Heading>
            </RevealFx>
            <RevealFx
              translateY="12"
              delay={0.2}
              fillWidth
              horizontal="start"
              paddingBottom="m"
            >
              <Text
                wrap="balance"
                onBackground="neutral-weak"
                variant="heading-default-xl"
              >
                {home.subline}
              </Text>
            </RevealFx>
            <RevealFx translateY="16" delay={0.4} horizontal="start">
              <Button
                id="about"
                data-border="rounded"
                href="/about"
                variant="secondary"
                size="m"
                arrowIcon
              >
                <Flex style={{ gap: "8px", alignItems: "center" }}>
                  {about.avatar.display && (
                    <Avatar
                      style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  {about.title}
                </Flex>
              </Button>
            </RevealFx>
          </Column>
        </Flex>
      </Column>

      {routes["/events"] && (
        <Flex fillWidth mobileDirection="column" style={{ gap: "24px" }}>
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Upcoming Events
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Events range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}

      {/* Featured Projects Section */}
      <Column fillWidth paddingY="l" style={{ gap: "32px" }}>
        <Flex horizontal="center" style={{ width: "100%" }}>
          <Column style={{ maxWidth: "1200px", width: "100%" }}>
            <Heading
              as="h2"
              variant="display-strong-xs"
              style={{
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              Featured Projects
            </Heading>

            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              style={{
                maxWidth: "800px",
                marginBottom: "2rem",
                textAlign: "center",
                margin: "0 auto 2rem auto",
              }}
            >
              Explore innovations created by our tech community members. These
              projects showcase the talent and creativity within Mechi
              Mavericks.
            </Text>

            <Flex fillWidth style={{ overflow: "visible" }}>
              <Projects range={[1, 3]} />
            </Flex>

            <Flex horizontal="center" style={{ marginTop: "2rem" }}>
              <Button href="/projects" variant="secondary" size="m" arrowIcon>
                View All Projects
              </Button>
            </Flex>
          </Column>
        </Flex>
      </Column>

      {/* Community Impact Section */}
      <Flex fillWidth mobileDirection="column" paddingY="l">
        <Column
          fillWidth
          paddingY="m"
          style={{ gap: "16px", alignItems: "center" }}
        >
          <Heading
            variant="display-strong-m"
            style={{
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            Our Community Impact
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            style={{
              textAlign: "center",
              maxWidth: "700px",
              marginBottom: "2rem",
            }}
          >
            At Mechi Mavericks, we're building a thriving tech ecosystem at
            Mechi Multiple Campus through collaboration, learning, and
            innovation.
          </Text>

          <Flex
            wrap
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <Card
              padding="l"
              style={{
                flex: "1 1 250px",
                minWidth: "250px",
                textAlign: "center",
              }}
            >
              <Column style={{ gap: "16px", alignItems: "center" }}>
                <Text variant="display-strong-l">5+</Text>
                <Text variant="heading-default-m">Tech Events</Text>
                <Text variant="body-default-s">
                  Workshops, seminars, and hackathons organized for the campus
                  community
                </Text>
              </Column>
            </Card>
            <Card
              padding="l"
              style={{
                flex: "1 1 250px",
                minWidth: "250px",
                textAlign: "center",
              }}
            >
              <Column style={{ gap: "16px", alignItems: "center" }}>
                <Text variant="display-strong-l">15+</Text>
                <Text variant="heading-default-m">Active Members</Text>
                <Text variant="body-default-s">
                  Students actively participating in our tech community
                  activities
                </Text>
              </Column>
            </Card>
            <Card
              padding="l"
              style={{
                flex: "1 1 250px",
                minWidth: "250px",
                textAlign: "center",
              }}
            >
              <Column style={{ gap: "16px", alignItems: "center" }}>
                <Text variant="display-strong-l">5+</Text>
                <Text variant="heading-default-m">Projects</Text>
                <Text variant="body-default-s">
                  Tech solutions built by our community members
                </Text>
              </Column>
            </Card>
          </Flex>
        </Column>
      </Flex>

      {/* Call to Action Section */}
      <Flex
        fillWidth
        mobileDirection="column"
        style={{
          background: "var(--accent-alpha-weak)",
          borderRadius: "var(--radius-l)",
          padding: "32px",
          gap: "24px",
          marginBottom: "32px",
        }}
      >
        <Column
          fillWidth
          style={{ gap: "16px", alignItems: "center", textAlign: "center" }}
        >
          <Heading variant="heading-strong-l">Join Our Tech Community</Heading>
          <Text variant="body-default-l" style={{ maxWidth: "600px" }}>
            Be part of a growing network of tech enthusiasts, developers, and
            innovators at Mechi Multiple Campus.
          </Text>
          <Flex style={{ gap: "16px", marginTop: "16px" }}>
            <Button variant="primary" size="l" href="/about">
              Learn More
            </Button>
            <Button
              variant="secondary"
              size="l"
              href="mailto:mechimavericks@gmail.com"
            >
              Contact Us
            </Button>
          </Flex>
        </Column>
      </Flex>
    </Column>
  );
}
