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
    question: "Can our members get treated at Private Hospitals or Clinics?   ",
    answer:
      "At the moment, our members can only be attended at Providence Health Facilities and Government hospitals or clinics our doctors would have referred them.",
  },
  {
    question: "Are Dependents also part of the Medical Aid beneficiaries?  ",
    answer:
      "As of now, our Medical Aid is for members only. Only our members can make use of the Medical Aid.",
  },
  {
    question: "Does the Medical Aid Cover Maternity?",
    answer:
      "Maternity benefits kicks in three months before Expected delivery date and covered up to delivery.",
  },
  {
    question: "Are there any shortfalls for this Medical Aid?",
    answer:
      "Currently our Medical Aid does not have any shortfalls. ",
  },
  {
    question: "Where can members be treated using this Medical Aid? ",
    answer:
      "Members should visit any of our Providence Clinics near them to receive treatment. Treatment at government hospitals will be done through the doctor’s referral",
  },
  {
    question: "Where are Providence Health Facilities?",
    answer:
      "Harare - (81 Baines Avenue, 52 Baines Avenue, 64 Cork road Avondale, 40 Josiah Chinamano Avenue, Epworth Clinic), Bulawayo - (Fort Street and 9th Avenue, Royal Arcade Complex), Gweru - 39 6th street, Mutare - 126 Herbert Chitepo Street, Masvingo - 13 Shuvai Mahofa street",
  },
];

const FAQSection = () => {
  return (

    <Box p={10} pt={12} w={'100%'} mb={6}>
      <Container maxW={{ base: "100%", md: "90%" }}>
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={1}>
          <GridItem>
            <VStack spacing={4} textAlign={{ base: "center", md: "left" }} mt={{ base: '0', md: '10' }}>
              <Text fontSize="lg" fontWeight="bold" color="teal.600">
                Support
              </Text>
              <Heading as="h1" size="xl">
                FAQs
              </Heading>
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
                  <AccordionPanel pb={2}>{faq.answer}</AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </GridItem>
        </Grid>
        {/* 
        <Flex justify="center" mb={8}>
          <Button colorScheme="teal" variant="outline">
            Show more FAQs
          </Button>
        </Flex> */}

        {/* <Box
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
        </Box> */}
      </Container>
    </Box >

  );
};

export default FAQSection;
