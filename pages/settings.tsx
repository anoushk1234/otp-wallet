import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import MainLayout from "../Layouts/Main.layout";

const settings = () => {
  const [ph, setPh] = React.useState<number>(10000000);
  return (
    <MainLayout>
      <Flex
        justify={"center"}
        alignItems={"center"}
        h="100vh"
        flexDirection={"column"}
        px={4}
      >
        <Heading fontSize={"3xl"}>Add Ph No for backup</Heading>
        <Input
          placeholder="Enter Phone Number"
          onChange={(e) => setPh(Number(e.target.value))}
        />
        <Button
          mt={4}
          bg="black"
          color={"white"}
          onClick={async () => {
            await axios.post("/api/hello", {
              phone: ph,
            });
          }}
        >
          Add
        </Button>
      </Flex>
    </MainLayout>
  );
};

export default settings;
