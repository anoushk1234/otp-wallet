import type { NextPage } from "next";
import Head from "next/head";
import { Box, Image, Flex, Heading, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Splash: NextPage = () => {
  const router = useRouter();
  return (
    <Flex
      flexDirection={"column"}
      bg="#0b0a1f"
      justify="center"
      align="center"
      // border="1px solid red"
      h="100vh"
    >
      <Box>
        <Image src="/securus-nl.png" alt="Securus" w="8rem" />
        <Heading color="white">Securus</Heading>
      </Box>
      <Button
        pos={"absolute"}
        bottom={0}
        mb={12}
        h="3rem"
        w="15rem"
        borderRadius="2xl"
        fontSize={"xl"}
        onClick={() => router.push("/home")}
      >
        Get Started
      </Button>
    </Flex>
  );
};

export default Splash;
