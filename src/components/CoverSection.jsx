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
    description:
      "Get access to day-to-day primary health care to keep you and your family in good health.",
  },
  {
    imageUrl: "icons/optometrist.png", // Replace with actual image URL
    title: "Optometry",
    description:
      "Eye exams, specs & frames.",
  },
  {
    imageUrl: "icons/dental-care.png", // Replace with actual image URL
    title: "Dentist",
    description:
      "Tooth filling, extraction all just to give your family the smile they deserve.",
  },
  {
    imageUrl: "icons/medicine.png", // Replace with actual image URL
    title: "Medicine",
    description:
      "Access to scripted, chronic and over-the-counter medication for you and your family",
  },
  {
    imageUrl: "icons/counseling.png", // Replace with actual image URL
    title: "Counseling",
    description:
      "Access to legal professional counseling.",
  },
  {
    imageUrl: "icons/ambulance.png", // Replace with actual image URL
    title: "Ambulance & Stabilisation",
    description:
      "Ambulance access at your earliest convenience.",
  },
  {
    imageUrl: "icons/hospital-building.png", // Replace with actual image URL
    title: "Hospitalization for Accidents",
    description:
      "Creating a supportive structure for wellbeing and health.",
  },
  {
    imageUrl: "icons/heart-attack.png", // Replace with actual image URL
    title: "Heart Attack & Stroke",
    description:
      "Early detection means early treatment to keep you looking and feeling best.",
  },
  {
    imageUrl: "icons/hospital-bed.png", // Replace with actual image URL
    title: "Medical Emergency",
    description:
      "Access to X-rays and basic boold tests.",
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
    <Text fontSize="xl" fontWeight="bold" mb={2} color="green.400">
      {title}
    </Text>
    <Text fontSize="md" color="gray.600" mb={4}>
      {description}
    </Text>
    <Button
      colorScheme="green"
      borderRadius={25}
      alignSelf="flex-start"
      fontWeight="200"
    >
      Find Out More
    </Button>
  </Flex>
);

const CoverSection = () => {
  const columns = useBreakpointValue({ base: 1, sm: 2, lg: 3 });
  return (
    <Flex direction="column" align="center" p={8} bg="gray.50" minH="100vh">
      <VStack spacing={6} textAlign="center" mb={8}>
        <Text fontSize="3xl" fontWeight="bold" color="green.600">
          Day-to-Day & Accident Cover
        </Text>
        <Text fontSize="lg" color="gray.600">
          Starting here for a healthier tomorrow
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
