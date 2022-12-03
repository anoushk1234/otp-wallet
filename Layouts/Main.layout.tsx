import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { ConnectButton, AvatarComponent } from "@rainbow-me/rainbowkit";
import BottomNavbar from "../components/BottomNavbar.components";
import { useAccount, useConnect } from "wagmi";
import { ethers } from "ethers";
const MainLayout = ({ children }: any) => {
  const { address } = useAccount();
  const [ens, setEns] = React.useState<string>("");
  useEffect(() => {
    async function getens() {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://eth-mainnet.g.alchemy.com/v2/ilIlpItblowwFDd3e73G_4a6Lk5dGb2U",
        1
      );
      let name = await provider.lookupAddress(
        "0x99Ec99FCdAd66Ca801DEf23b432500fF045251f9"
      );
      setEns(name!);
      console.log(name);
    }
    getens();
  }, [address]);
  return (
    <Flex align={"center"} h="80vh" justify="center" flexDirection={"column"}>
      {address && (
        <Box
          pos={"absolute"}
          top="0"
          mt="2"
          display={"flex"}
          alignItems={"center"}
          border="2px solid black"
          py={2}
          gap={2}
          px={4}
          borderRadius="2xl"
        >
          <Text fontSize={"xl"} fontWeight={"bold"}>
            {ens || address.substring(0, 6) + "..." + address.substring(38, 42)}
          </Text>
          <CustomAvatar
            address={address}
            // ensImage={"https://avatars.githubusercontent.com/u/113512?s=64&v=4"}
            size={40}
          />
        </Box>
      )}
      {!address && (
        <Box
          justifyContent={"center"}
          alignContent="center"
          display={"flex"}
          flexDir="column"
        >
          <Heading>Welcome to Securus</Heading>
          <ConnectButton />
        </Box>
      )}

      {children}
      <BottomNavbar />
    </Flex>
  );
};

export default MainLayout;
const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {
  const color = "lightblue";
  return ensImage ? (
    <img
      src={ensImage}
      width={size}
      height={size}
      style={{ borderRadius: 999 }}
    />
  ) : (
    <div
      style={{
        backgroundColor: color,
        borderRadius: 999,
        height: size,
        width: size,
      }}
    ></div>
  );
};
