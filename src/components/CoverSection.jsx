import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  SimpleGrid,
  Image,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

// Updated features array to include image URLs
const features = [
  {
    imageUrl: "icons/doctor.png", // Replace with actual image URL
    title: "Doctors",
    description: "Chakra UI strictly follows WAI-ARIA standards for all components.",
  },
  {
    imageUrl: "icons/optometrist.png", // Replace with actual image URL
    title: "Optometry",
    description: "Customize any part of our components to match your design needs.",
  },
  {
    imageUrl: "icons/dental-care.png", // Replace with actual image URL
    title: "Dentist",
    description: "Designed with composition in mind. Compose new components with ease.",
  },
  {
    imageUrl: "icons/medicine.png", // Replace with actual image URL
    title: "Medicine",
    description: "Optimized for multiple color modes. Use light or dark, your choice.",
  },
  {
    imageUrl: "icons/counseling.png", // Replace with actual image URL
    title: "Counseling",
    description: "Guaranteed to boost your productivity when building your app or website.",
  },
  {
    imageUrl: "icons/ambulance.png", // Replace with actual image URL
    title: "Ambulance & Stabilisation",
    description: "We're a team of active maintainers ready to help you whenever you need.",
  },
  {
    imageUrl: "icons/hospital-building.png", // Replace with actual image URL
    title: "Hospitalization for Accidents",
    description: "We're a team of active maintainers ready to help you whenever you need.",
  },
  {
    imageUrl: "icons/heart-attack.png", // Replace with actual image URL
    title: "Heart Attack & Stroke",
    description: "We're a team of active maintainers ready to help you whenever you need.",
  },
  {
    imageUrl: "icons/hospital-bed.png", // Replace with actual image URL
    title: "Medical Emergency",
    description: "We're a team of active maintainers ready to help you whenever you need.",
  },
];

const FeatureCard = ({ imageUrl, title, description }) => (
  <Flex
    direction="column"
    align="left"
    bg="white"
    p={6}
    borderRadius="md"
    boxShadow="md"
    textAlign="left"
  >
    <Image src={imageUrl} boxSize={20} mb={4} />
    <Text fontSize="xl" fontWeight="bold" mb={2}>
      {title}
    </Text>
    <Text fontSize="md" color="gray.600" mb={4}>
      {description}
    </Text>
    <Button colorScheme="green" alignSelf="flex-start" fontWeight="200">
      Find Out More
    </Button>
  </Flex>
);

const CoverSection = () => {
  const columns = useBreakpointValue({ base: 1, sm: 2, lg: 3 });
  return (
    <Flex direction="column" align="center" p={8} bg="gray.50" minH="100vh">
      <VStack spacing={6} textAlign="center" mb={8}>
        <Text fontSize="3xl" fontWeight="bold">
          An experience you'd expect from a design system
        </Text>
        <Text fontSize="lg" color="gray.600">
          Opinionated and designed for daily use.
        </Text>
      </VStack>
      <SimpleGrid columns={columns} spacing={6} w="full" maxW="1200px">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            imageUrl={feature.imageUrl}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default CoverSection;
