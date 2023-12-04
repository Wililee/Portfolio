import { Box, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import ProfileCard from "../components/profile-card";

export default function Landing() {
  return (
    <Flex
      id="Landing"
      align="center"
      justify={{ base: "center", md: "space-around" }}
      direction={{ base: "column", md: "row" }}
      minH="calc(100vh - 80px)"
      gap={5}
    >
      <Stack gap="10px">
        <Heading size="xl" color="primary.800">
          {"Hi! I'm Matt."}
        </Heading>
        <Heading size="md" fontWeight="regular" color="primary.800">
          {"Stick around to learn a bit about me."}
        </Heading>
        <Text fontSize={{ base: "sm" }}>
          Welcome to the home of my{" "}
          <Link color="teal.500" href="/#Projects">
            Projects
          </Link>
          ,{" "}
          <Link color="teal.500" href="/#Passions">
            Passions
          </Link>
          , and continuous development.
        </Text>
      </Stack>
      <Box maxW={"sm"} rounded={"xl"} overflow={"hidden"}>
        <Image src="./landing-photo.jpg" alt=""></Image>
      </Box>
      {/* <ProfileCard /> */}
    </Flex>
  );
}