"use client";

import { Box, chakra } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Box style={{ height: `calc(100vh - 65px)` }}>
        <chakra.iframe
          height={"100%"}
          width="100%"
          src="https://drive.google.com/file/d/1ZpysZtsHvXBfScmylf2o7dXVQHirkzOO/preview?usp=drivesdk"
        ></chakra.iframe>
      </Box>
    </>
  );
}