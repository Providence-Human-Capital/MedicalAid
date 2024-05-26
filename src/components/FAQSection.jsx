import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  VStack,
  Heading,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Avatar,
  HStack,
  Flex,
  Spacer,
  Container,
} from "@chakra-ui/react";

const faqs = [
  {
    question: "How is Chakra UI Pro different from Chakra UI?",
    answer:
      "Chakra UI Pro is built on top of the popular Chakra UI component library. Compared to Chakra UI, the components we offer here are more complex and range from simple banners to full blown page layouts.",
  },
  {
    question: "What do I get when I buy a Chakra UI Pro license?",
    answer:
      "After you have purchased a license from our payment provider, you will receive an email from us with your license key. You can then enter the license key in the setup wizard. The source code is provided to you via the website, just like with the free components.",
  },
  {
    question: "Does Chakra UI Pro come with a Figma file or similar?",
    answer:
      "Yes, Chakra UI Pro includes design files for Figma, Sketch, and Adobe XD to help you quickly get started with your design projects.",
  },
  {
    question: "How does the Team license work?",
    answer:
      "The Team license allows you to use Chakra UI Pro for up to 10 developers. Each developer will get access to the full library of components and our premium support.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a 14-day free trial for you to explore the components and see if they fit your project needs.",
  },
];

const FAQSection = () => {
  return (
   
      <Box p={10} bg="gray.50" pt={20} minH="70vh">
         <Container maxW="70%">
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={8} mb={8}>
          <GridItem>
            <VStack spacing={4} textAlign={{ base: "center", md: "left" }}>
              <Text fontSize="lg" fontWeight="bold" color="teal.500">
                Support
              </Text>
              <Heading as="h1" size="xl">
                FAQs
              </Heading>
              <Text fontSize="md" color="gray.600">
                Everything you need to know about the product and billing. For
                questions about licensing, please see our{" "}
                <Link color="teal.500">licensing page</Link>.
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <Accordion allowToggle>
              {faqs.map((faq, index) => (
                <AccordionItem key={index}>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      {faq.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </GridItem>
        </Grid>

        <Flex justify="center" mb={8}>
          <Button colorScheme="teal" variant="outline">
            Show more FAQs
          </Button>
        </Flex>

        <Box
          p={8}
          bg="green.50"
          borderRadius="md"
          boxShadow="md"
          textAlign="center"
        >
          <HStack justify="center" spacing={4}>
            <Avatar name="User 1" src="https://bit.ly/ryan-florence" />
            <Avatar name="User 2" src="https://bit.ly/kent-c-dodds" />
          </HStack>
          <Text fontSize="lg" fontWeight="bold" mt={4}>
            Still have questions?
          </Text>
          <Text fontSize="md" color="gray.600" mb={4}>
            Can't find the answer you're looking for? Our team is happy to
            answer your questions.
          </Text>
          <Button colorScheme="green" size="lg" fontWeight="200"> 
            Send us an email
          </Button>
        </Box>
        </Container>
      </Box>
   
  );
};

export default FAQSection;
