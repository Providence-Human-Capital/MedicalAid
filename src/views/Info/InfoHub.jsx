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
} from '@chakra-ui/react';

const InfoHub = () => {
  return (
    <Box p={4} maxW="md" mx="auto">
      <Heading as="h2" size="lg" mb={4}>
        Providence Medical Aid
      </Heading>
      <Text mb={2}>
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
      <Heading as="h3" size="md" mb={2}>
        Roll Out
      </Heading>
      <Text mb={2}>
        The roll out started with access to Providence Health, where there is an
        already existing arrangement to cover members of staff without medical
        aid.
      </Text>
      <List spacing={2}>
        <ListItem>
          <ListIcon name="check" color="green.500" />
          Primary health facilities are available country-wide at all Providence
          clinics.
        </ListItem>
        <ListItem>
          <ListIcon name="check" color="green.500" />
          All cases must be referred from the Providence network of service
          providers for effective Managed care.
        </ListItem>
      </List>
      <Divider my={4} />
      <Heading as="h3" size="md" mb={2}>
        How to Register
      </Heading>
      <Text mb={2}>
        Members must visit our health centres and register their chronic illness.
      </Text>
      <Text>
        After referral from one of our doctors, you can then be registered into
        the system and drugs can be delivered to your convenience.
      </Text>
    </Box>
  );
};
export default InfoHub;
