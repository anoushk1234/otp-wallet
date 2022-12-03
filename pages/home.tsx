import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import { ethers } from "ethers";
import React, { useEffect } from "react";
import MainLayout from "../Layouts/Main.layout";
import abi from "../components/abi.json";
import { useAccount, useSigner } from "wagmi";
const Home = () => {
  const [newWallet, setNewWallet] = React.useState<string>("");
  const [otp, setOtp] = React.useState<string>("");
  const [contract, setContract] = React.useState<ethers.Contract>();
  const { data: WalletSigner } = useSigner();
  const { address } = useAccount();
  useEffect(() => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://polygon-mumbai.g.alchemy.com/v2/-XiAniAE0vW5WjcliOiC1D_0muNwiYSr",
      80001
    );

    const SecurusContract = new ethers.Contract(
      "0x24A87513B3B4C6f7290010c741222e3Ae8F764b0",
      abi,
      WalletSigner!
    );
    setContract(SecurusContract);
  }, [WalletSigner]);
  return (
    <MainLayout>
      {address && (
        <Flex
          justify={"center"}
          alignItems={"center"}
          h="100vh"
          flexDirection={"column"}
          px={4}
        >
          <Heading fontSize={"3xl"}>Add New Wallet Address</Heading>
          {/* <Input placeholder="Enter Wallet" onChange={(e) => {
          setNewWallet(e.target.value);
        }} /> */}
          <Input
            placeholder="Enter Otp"
            onChange={(e) => {
              setNewWallet(e.target.value);
            }}
          />
          <Button
            mt={4}
            bg="black"
            color={"white"}
            onClick={async () => {
              const tx = await contract?.recoverWallet(otp);

              alert("Wallet Recovered" + tx.hash);
            }}
          >
            Recover
          </Button>
        </Flex>
      )}
    </MainLayout>
  );
};

export default Home;
