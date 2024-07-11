import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  HStack,
  Image,
  Container,
  SimpleGrid,
  Card,
  ButtonGroup,
  CardBody,
  CardFooter,
  Button,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import provider from "../../../public/icons/observation.png"
import doctor from "../../../public/icons/medical-staff.png"
import counselling from "../../../public/icons/conversation.png"
import pharmacy from "../../../public/icons/medicine.png"

const serviceData = [
  {
    img: provider,
    title: 'Find a provider',
    link: "/clinic-location",
    desc: 'Search for Doctors, Dentist, Hospitals, Optometrists and clinic',
    more: 'Search on the Prime Cure Network for a Doctor, Dentist, Optometrist, Clinic',
  },
  {
    img: doctor,
    title: 'Consultation (Ask a Doctor)',
    link: "/doctor-lnfo",
    desc: 'Book “Ask a Doctor”: Virtual Doctors for diagnosis, scripts or referrals',
    more: 'Search on the Prime Cure Network for a Doctor, Dentist, Optometrist, Clinic',
  },
  {
    img: counselling,
    title: 'Counselling',
    link: "/clinic-location",
    desc: 'Search for Pharmacies',
    more: 'Telephonic, Virtual or Face-to-Face Counselling.',
  },
  {
    img: pharmacy,
    title: 'Find a Pharmacy',
    link: "/clinic-location",
    desc: 'Search for Pharmacies',
    more: 'Search on the Prime Cure Network for a Pharmacy',
  }
]

const SelfService = () => {
  return (
    <Container maxW={{ sm: "100%", md: "80%", lg: "90%" }} mt={2}>
      <Box p={4} mb={8}>
        <Box textAlign="center" mb={8}>
          <Heading color="green.600">Self-Support</Heading>
        </Box>
        <Flex justify="center" mb={8}>
          <HStack spacing={0}>
            <Box
              // bg="green.500"
              color="black"
              py={2}
              px={4}
            >
              <Text fontSize={'xl'} color="green.600" as={'b'}>Medical Insurance & Accident Cover</Text>
            </Box>
          </HStack>
        </Flex>
        <Flex justify="center" wrap="wrap" spacing={8}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2, xl: 4 }} spacing={6}>
            {serviceData.map((service) => (

              <Card maxW='lg' boxShadow={'xl'} border={'1px solid #eaedec'}>
                <CardBody>
                  <Center>
                    <Image
                      src={service.img}
                      alt={service.title}
                      borderRadius='lg'
                      height={'8rem'}
                    />
                  </Center>
                  <VStack mt='6' spacing='3' p={3} textAlign={'center'}>
                    <Link to={service.link}>
                      <Heading size='md' className='link' color={'green.700'} >{service.title}</Heading>
                    </Link>
                    <Text>
                      {service.desc}
                    </Text>
                    <Text color='gray.500' fontSize='md'>
                      {service.more}
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </Container>
  );
};

export default SelfService;
