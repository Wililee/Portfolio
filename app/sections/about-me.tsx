"use client";

import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import ProfileCard from "../components/profile-card";
import Rating from "../components/rating";

export default function AboutMe() {
  return (
    <Flex align="center" direction="column">
      <Box id="About"></Box>
      <Text fontSize="3xl">About Me</Text>
      <br></br>
      <Flex
        w={{ base: "100%" }}
        maxW="850px"
        align="center"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        gap={10}
      >
        <ProfileCard />
        <Stack minW={"3xs"} maxW={"sm"} gap={5}>
          <Stack>
            <Text fontSize={"xl"}>The Journey</Text>
            <Text
              fontSize={"sm"}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              {
                "I am a Software Developer with 2 years of professional experience and many more spent developing my skills. TypeScript, React, andSocket.io are my favorite learned tech's because they enable me to build multiplayer games to enjoy with friends."
              }
            </Text>
          </Stack>
          <Stack>
            <Text fontSize={"xl"}>{"Breaking a Couple Eggs"}</Text>
            <Text
              fontSize={"sm"}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              {
                "When I take on a new project my goal is to learn a new technology or master an existing skill. I frequent Codecademy to learn about the new, hot tools in Web Development. Even this site was made with the Chakra UI library as I picked it up. How am I doing?"
              }
            </Text>
            <Rating />
          </Stack>
          <Stack>
            <Text fontSize={"xl"}>{"It's like Poetry"}</Text>
            <Text
              fontSize={"sm"}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              {
                "In my spare time I enjoy Kayaking, Social Gaming, and learning about Geography and History. My hobbies inspire me to keep creating new online experiences where I can share my passions and bring people together."
              }
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
}