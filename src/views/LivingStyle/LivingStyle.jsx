import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const LivingStyle = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === "light" ? "gray.100" : "gray.800"}
      p={8}
      borderRadius="md"
      boxShadow="md"
    >
      <Heading as="h2" size="lg" color="green.500">
        Introducing
      </Heading>
      <Heading as="h1" size="2xl" color="green.600" mt={2}>
        Providence Wellness
      </Heading>
      <Text mt={4} fontSize="lg">
        At Providence Health, we want to give you the power to look after your
        physical and mental well-being.
      </Text>
      <Text mt={4} fontSize="md">
        Wellness Benefits are included in all our Medical Insurance plans, or
        you can add them to our Accident and Gap Cover plans at R55 per month.
        Get access to family counselling, legal or financial advice and{" "}
        <Text as="span" fontWeight="bold">
          extra:
        </Text>{" "}
        {/* A 20% discount on over 2,500 products at Dis-Chem. */}
      </Text>
      <Text mt={4} fontSize="lg" fontWeight="bold">
        {/* Save up to R600/month on your favourite healthy and essential products */}
      </Text>
      <Flex mt={8} justify="space-between" align="center">
        <Image
          src="https://placehold.co/100x100"
          alt="Icon 1"
          boxSize="100px"
          borderRadius="full"
        />
        <Image
          src="https://placehold.co/100x100"
          alt="Icon 2"
          boxSize="100px"
          borderRadius="full"
        />
        <Image
          src="https://placehold.co/100x100"
          alt="Icon 3"
          boxSize="100px"
          borderRadius="full"
        />
        <Image
          src="https://placehold.co/100x100"
          alt="Icon 4"
          boxSize="100px"
          borderRadius="full"
        />
      </Flex>
    </Box>
  );
};

export default LivingStyle;
