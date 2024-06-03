import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SelfService = () => {
  return (
    <Box bg="gray.100" p={4}>
      <Box textAlign="center" mb={8}>
        <Heading color="green.600">Self-Support</Heading>
      </Box>
      <Flex justify="center" mb={8}>
        <HStack spacing={0}>
          <Box
            bg="green.500"
            color="white"
            py={2}
            px={4}
            borderTopLeftRadius="md"
            borderBottomLeftRadius="md"
          >
            <Text>Medical Insurance & Accident Cover</Text>
          </Box>
        </HStack>
      </Flex>
      <Flex justify="center" wrap="wrap" spacing={8}>
        <VStack
          bg="white"
          p={8}
          borderRadius="md"
          boxShadow="md"
          m={4}
          maxW="sm"
        >
          <Image
            src="https://placehold.co/100x100"
            alt="Find a provider"
            mb={4}
          />
          <Heading size="md" color="green.600">
            <Link
              to={"/clinic/location"}
              fontWeight="200"
              className="link"
              style={{ color: "green" }}
            >
              Find a provider
            </Link>
          </Heading>
          <Text textAlign="center">
            Search for Doctors, Dentist, Hospitals, Optometrists and clinic
          </Text>
          <Text textAlign="center" color="gray.600">
            Search on the Prime Cure Network for a Doctor, Dentist,
            Optometrist,Clinic
          </Text>
        </VStack>
        <VStack
          bg="white"
          p={8}
          borderRadius="md"
          boxShadow="md"
          m={4}
          maxW="sm"
        >
          <Image src="https://placehold.co/100x100" alt="Consultation" mb={4} />
          <Heading size="md" color="green.600">
            Consultation(Ask a Doctor)
          </Heading>
          <Text textAlign="center">
            Book “Ask a Doctor”: Virtual Doctors for diagnosis, scripts or
            referrals
          </Text>
          <Text textAlign="center" color="gray.600">
            {/* See the links to the Dis-Chem Health app stores */}
          </Text>
        </VStack>
        <VStack
          bg="white"
          p={8}
          borderRadius="md"
          boxShadow="md"
          m={4}
          maxW="sm"
        >
          <Image
            src="https://placehold.co/100x100"
            alt="Book Family, Legal or Financial Counselling"
            mb={4}
          />
          <Heading size="md" color="green.600">
            Counselling
          </Heading>
          <Text textAlign="center">Search for Pharmacies</Text>
          <Text textAlign="center" color="gray.600">
            Telephonic, Virtual or Face-to-Face Counselling.
          </Text>
        </VStack>
        <VStack
          bg="white"
          p={8}
          borderRadius="md"
          boxShadow="md"
          m={4}
          maxW="sm"
        >
          <Image
            src="https://placehold.co/100x100"
            alt="Find a Pharmacy"
            mb={4}
          />
          <Heading size="md" color="green.600">
            Find a Pharmacy
          </Heading>
          <Text textAlign="center">Search for Pharmacies</Text>
          <Text textAlign="center" color="gray.600">
            Search on the Prime Cure Network for a Pharmacy.
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default SelfService;
