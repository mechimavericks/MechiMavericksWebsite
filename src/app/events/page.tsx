import React from "react";
import { Column, Heading, Flex } from "@/once-ui/components";
import { Events } from "@/components/events/Events";
import { blog } from "@/app/resources/content";

export async function generateMetadata() {
  return {
    title: "Events - Mechi Mavericks",
    description:
      "Upcoming and past events from the Mechi Mavericks tech community",
  };
}

export default function EventsPage() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Column fillWidth paddingY="l" gap="m">
        <Heading variant="display-strong-l">Community Events</Heading>
        <Heading variant="heading-default-xl" onBackground="neutral-weak">
          Join our workshops, hackathons, and other exciting tech events
        </Heading>
      </Column>

      {/* Upcoming Events Section */}
      <Column fillWidth gap="m">
        <Heading variant="heading-strong-l">Upcoming Events</Heading>
        <Flex fillWidth gap="24" mobileDirection="column">
          <Events columns="2" eventType="upcoming" />
        </Flex>
      </Column>

      {/* Past Events Section */}
      <Column fillWidth gap="m">
        <Heading variant="heading-strong-l">Past Events</Heading>
        <Flex fillWidth gap="24" mobileDirection="column">
          <Events columns="2" eventType="past" />
        </Flex>
      </Column>
    </Column>
  );
}
