import { Flex, IconButton, Image, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { IoIosHome, IoIosSettings } from "react-icons/io";

const BottomNavbar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Flex
      boxShadow="base"
      justify={"space-evenly"}
      bg={"white"}
      // bgColor={useColorModeValue("#111111", "#ffffff")}
      py="0.5rem"
      gap={4}
      position="fixed"
      bottom={0}
      w="100%"
      borderTopRightRadius="1rem"
      borderTopLeftRadius="1rem"
    >
      <IconButton
        bg={"transparent"}
        icon={
          <Image
            src={useColorModeValue(
              "/assets/homeiconblack.svg",
              "/assets/homeicon.svg"
            )}
            opacity={pathname.slice(1) === "home" ? 1 : 0.5}
          />
        }
        aria-label={"Home"}
        // color="black"
        // color={useColorModeValue("#ffffff", "#111111")}
        onClick={() => router.push("/home")}
      ></IconButton>
      <IconButton
        color={useColorModeValue("#ffffff", "#111111")}
        bg={"transparent"}
        icon={
          <Image
            src={useColorModeValue(
              "/assets/profileiconblack.svg",
              "/assets/profileicon.svg"
            )}
            opacity={pathname.slice(1) === "settings" ? 1 : 0.5}
          />
        }
        aria-label={"Profile"}
        onClick={() => router.push("/settings")}
      ></IconButton>
    </Flex>
  );
};

export default BottomNavbar;
