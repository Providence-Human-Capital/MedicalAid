import React from "react";
import {
  Box,
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
} from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <Container maxW={{ sm: "100%", md: "90%", lg: "70%" }}>
      <Box p={4}>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        textAlign="center"
        color="green.500"
      >
        How can we help?
      </Text>
      <Tabs vundefinednt="soft-rounded" colorScheme="green" mt={4}>
        <TabList justifyContent="center">
          <Tab>Medical Insurance</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box bg="gray.100" p={8} borderRadius="md">
              <Text fontSize="xl" fontWeight="bold" color="green.500">
                Medical Insurance
              </Text>
              <Text mt={2}>
                <strong>Sales:</strong> <br />
                0861 029 892 <br />
                <a href="mailto:customerengagement@dischemhealth.co.za">
                  customerengagement@dischemhealth.co.za
                </a>
              </Text>
              <Text mt={2}>
                <strong>Customer Support and General queries:</strong> <br />
                0861 029 892 <br />
                <a href="mailto:dischemhealth@kaelo.co.za">
                  dischemhealth@kaelo.co.za
                </a>
              </Text>
              <Text mt={2}>
                <strong>Family, Legal or Financial Counselling:</strong> <br />
                0861 635 766 <br />
                (powered by Kaelo AskNelson)
              </Text>
              <Text mt={2}>
                <strong>Emergency – Netcare911:</strong> <br />
                082 911
              </Text>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
    </Container>
  );
};

export default ContactUs;
