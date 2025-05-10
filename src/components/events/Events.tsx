import React from "react";
import {
  Column,
  Card,
  Text,
  Heading,
  Flex,
  Button,
} from "@/once-ui/components";
import { formatDate } from "@/app/utils/date";

interface Event {
  title: string;
  description: string;
  date: string;
  location: string;
  type: "workshop" | "hackathon" | "seminar" | "other";
  image?: string;
  link?: string;
}

interface EventsProps {
  range?: [number, number];
  columns?: "1" | "2" | "3";
  eventType?: "upcoming" | "past"; // New prop for filtering event types
}

// Sample events data
const eventsData: Event[] = [
  // Upcoming events
  {
    title: "Git and GitHub Workshop",
    description:
      "Master version control essentials with Git and GitHub. Learn commits, branching, pull requests, and collaborative development workflows.",
    date: "2025-05-15",
    location: "Mechi Multiple Campus",
    type: "workshop",
    image: "/images/events/git-workshop.jpg",
    link: "",
  },
  {
    title: "CODEWAR 1.0",
    description: "Join us for our annual hackathon and showcase your skills",
    date: "2025-06-05", // Future date
    location: "Mechi Multiple Campus",
    type: "hackathon",
    link: "https://codewar.mechimavericks.tech/",
  },

  {
    title: "Introduction to Web Development",
    description:
      "Learned the fundamentals of HTML, CSS, and JavaScript to build interactive websites.",
    date: "2025-1-10",
    location: "Mechi Multiple Campus",
    type: "workshop",
  },
  {
    title: "Student Empowerment & Hands-on Learning Program",
    description:
      "A comprehensive program focused on practical skills development and empowering students with industry-relevant knowledge and hands-on experience in software development and problem-solving.",
    date: "2024-02-20", // Past date
    location: "Mechi Multiple Campus",
    type: "workshop",
  },
];

// Helper function to filter events by upcoming or past
const filterEventsByType = (
  events: Event[],
  type: "upcoming" | "past"
): Event[] => {
  const currentDate = new Date();

  if (type === "upcoming") {
    return events.filter((event) => new Date(event.date) >= currentDate);
  } else {
    return events
      .filter((event) => new Date(event.date) < currentDate)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by most recent
  }
};

export function Events({
  range = [0, eventsData.length],
  columns = "1",
  eventType = "upcoming",
}: EventsProps) {
  const filteredEvents = filterEventsByType(eventsData, eventType);
  const [start, end] = range;

  // Apply range to filtered events
  const displayedEvents =
    start === 0
      ? filteredEvents.slice(0, end)
      : filteredEvents.slice(start - 1, end);

  return (
    <Column
      gap="m"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "var(--space-m)",
      }}
    >
      {displayedEvents.length > 0 ? (
        displayedEvents.map((event, index) => (
          <Card key={index} padding="m">
            <Column gap="m">
              <Column gap="s">
                <Heading variant="heading-strong-m">{event.title}</Heading>
                <Text variant="body-default-m">{event.description}</Text>
              </Column>
              <Flex gap="m" vertical="center" wrap>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {formatDate(event.date)}
                </Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {event.location}
                </Text>
              </Flex>
              <Flex gap="m" vertical="center" wrap>
                <Text
                  variant="body-default-s"
                  onBackground="brand-weak"
                  style={{
                    padding: "4px 12px",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: "var(--brand-alpha-weak)",
                  }}
                >
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </Text>
              </Flex>
              {event.link && (
                <Button
                  href={event.link}
                  variant="secondary"
                  size="s"
                  arrowIcon
                  fillWidth
                >
                  {eventType === "upcoming" ? "Register Now" : "View Details"}
                </Button>
              )}
            </Column>
          </Card>
        ))
      ) : (
        <Text variant="body-default-l" onBackground="neutral-weak">
          No {eventType} events to display.
        </Text>
      )}
    </Column>
  );
}
