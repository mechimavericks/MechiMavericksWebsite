"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Fade, Flex, Line, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import { routes, display } from "@/app/resources";
import {
  person,
  home,
  about,
  blog,
  work,
  gallery,
  teams,
} from "@/app/resources/content";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = "en-GB",
}) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        show="s"
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
      >
        <Flex
          paddingLeft="12"
          fillWidth
          vertical="center"
          textVariant="body-default-s"
        >
          <Flex vertical="center">
            <Image
              src="/logo.svg"
              alt="Mechi Mavericks Logo"
              width={40}
              height={40}
              style={{ marginRight: "1rem" }}
            />{" "}
          </Flex>
          {display.location && (
            <Flex hide="s" style={{ marginBottom: "8px" }}>
              Mechi Mavriks - MMC
            </Flex>
          )}
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {routes["/"] && (
                <ToggleButton
                  prefixIcon="home"
                  href="/"
                  selected={pathname === "/"}
                />
              )}
              <Line vert maxHeight="24" />
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/about"
                    label={about.label}
                    selected={pathname === "/about"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/about"
                    selected={pathname === "/about"}
                  />
                </>
              )}
              {routes["/projects"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href="/projects"
                    label={work.label}
                    selected={pathname.startsWith("/projects")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    href="/projects"
                    selected={pathname.startsWith("/projects")}
                  />
                </>
              )}{" "}
              {routes["/events"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href="/events"
                    label={blog.label}
                    selected={pathname.startsWith("/events")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href="/events"
                    selected={pathname.startsWith("/events")}
                  />
                </>
              )}{" "}
              {routes["/teams"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/teams"
                    label={teams.label}
                    selected={pathname.startsWith("/teams")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/teams"
                    selected={pathname.startsWith("/teams")}
                  />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex hide="s">
              {display.time && <TimeDisplay timeZone={person.timeZone} />}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
