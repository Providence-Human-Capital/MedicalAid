import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Input,
  Button,
  Checkbox,
  Stack,
  Select,
  useBreakpointValue,
  Link,
  Spacer,
  Container,
} from "@chakra-ui/react";

const CallMeBack = () => {
  const formWidth = useBreakpointValue({ base: "90%", md: "400px" });
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        minH="70vh"
        bg="gray.50"
        p={4}
      >
        <Container maxW="70%">
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
          
           
          >
            <Box flex="1" textAlign={{ base: "center", md: "left" }} p={4}>
              <Text fontSize="sm" color="gray.500">
                *Providence Health is not a Medical Scheme or an Insurer
              </Text>
              <Heading as="h1" size="2xl" mt={2} color="green.600">
                Medical Insurance
              </Heading>
              <Text fontSize="lg" mt={2} color="gray.600">
                Take care of your family with products to suit your needs &
                pocket
              </Text>
              <Box mt={6}>
                <Image
                  src="/images/ill.png"
                  alt="Medical Illustration"
                />
              </Box>
            </Box>
            <Box
              flex="1"
              bg="white"
              boxShadow="md"
              borderRadius="lg"
              p={6}
              m={4}
              maxW={formWidth}
            >
              <Heading as="h3" size="lg" mb={4}>
                Get a call back
              </Heading>
              <Text mb={4}>
                Fill in your details for a broker to call you back:
              </Text>
              <Stack spacing={3}>
                <Input placeholder="Name*" />
                <Input placeholder="Surname*" />
                <Input placeholder="Cell Number*" />
                <Input placeholder="Email*" />
                <Select placeholder="I'm interested in">
                  <option>Option 1</option>
                  <option>Option 2</option>
                </Select>
                <Checkbox>
                  I agree to the website{" "}
                  <Link href="#" color="blue.500">
                    terms and conditions
                  </Link>{" "}
                  /{" "}
                  <Link href="#" color="blue.500">
                    privacy policy
                  </Link>
                  *
                </Checkbox>
                <Button colorScheme="green" size="lg">
                  SUBMIT
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default CallMeBack;
