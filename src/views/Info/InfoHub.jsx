import React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  Divider,
  List,
  ListItem,
  ListIcon,
  Container
} from '@chakra-ui/react';
import { WarningIcon, InfoIcon } from "@chakra-ui/icons";

const InfoHub = () => {
  return (
    <Container maxW={{ sm: "100%", md: "90%", lg: "70%" }}>
      <Box p={4} mx="auto" mt={6}>
        <Heading as="h2" size="lg" mb={4} color="green.600">
          Providence Medical Aid
        </Heading>
        <Text mb={3}>
          Registered on 10th August 2023, Providence Medical Aid was established
          after fulfilling all the necessary requirements set by the Ministry of
          Health and Child Care in terms of the Medical Services Act (Chapter 15:13)
          as read with the Statutory Instrument 330 of 2000 S/s 330/2000,35/2004.
        </Text>
        <VStack align="start" spacing={2}>
          <Text>
            The journey began with the crafting of a Medical Aid Constitution,
            acceptable to both the potential membership and the Principals who are
            the promoters and guarantors of the Medical Aid.
          </Text>
          <Text>
            This process was completed on 1st August 2023, and the Medical Aid
            Constitution was signed for submission with the Ministry of Health and
            Child Care, which accepted the application.
          </Text>
        </VStack>
        <Divider my={4} />
        <Heading as="h3" size="md" mb={2} color="green.700" mt={5}>
          Roll Out
        </Heading>
        <Text mb={2}>
          The roll out started with access to Providence Health, where there is an
          already existing arrangement to cover members of staff without medical
          aid.
        </Text>
        <List spacing={2}>
          <ListItem>
            <ListIcon mb={1} as={InfoIcon} color="green.700" />
            Primary health facilities are available country-wide at all Providence
            clinics.
          </ListItem>
          <ListItem >
            <ListIcon mt={1} mb={1} as={InfoIcon} color="green.700" />
            All cases must be referred from the Providence network of service
            providers for effective Managed care.
          </ListItem>
        </List>
        <Divider my={4} />
        <Heading as="h3" size="md" mb={3} color="green.700" mt={5}>
          How to Register
        </Heading>
        <Text mb={2}>
          Members must visit our health centres and register their chronic illness.
        </Text>
        <Text mb={7}>
          After referral from one of our doctors, you can then be registered into
          the system and drugs can be delivered to your convenience.
        </Text>
      </Box>
    </Container>
  );
};
export default InfoHub;
