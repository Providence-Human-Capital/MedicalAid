import {
  Box,
  Flex,
  Link,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Box as="footer" bg="green.500" color="white" py={10} px={5}>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          // templateColumns={{ base: "2fr", md: "repeat(4, 1fr)" }}
          gap={6}
          maxW="1200px"
          mx="auto"
        >
          <GridItem>
            <VStack align="start">
              {/* {{ base: "center", md: "start" }} */}
              <Text fontSize="lg" fontWeight="bold">
                Company
              </Text>
              <Link href="#">About</Link>
              <Link href="#">Find a Doctor/Provider</Link>
              {/* <Link href="#">Health Insurance Calculator</Link> */}
              <Link href="#">Self Support</Link>
              <Link href="#">Medical Insurance FAQs</Link>
              <Link href="#">Gap Cover FAQs</Link>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="start">
              <Text fontSize="lg" fontWeight="bold">
                Products
              </Text>
              {/* <Link href="#">MyHealth Core</Link> */}
              {/* <Link href="#">MyHealth Plus</Link> */}
              <Link href="#">Accident Cover</Link>
              <Link href="#">Buy for Someone Else</Link>
              {/* <Link href="#">Gap Cover</Link> */}
              <Link href="#">Lifestyle Benefits</Link>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="start">
              <Text fontSize="lg" fontWeight="bold">
                Connect
              </Text>
              <Link href="#">Medical Insurance Policy Packs</Link>
              {/* <Link href="#">Gap Cover Policy Packs</Link> */}
              <Link href="#">Contact</Link>
              <Link href="#">Info Hub</Link>
              <HStack spacing={4} mt={4}>
                <Link href="#">
                  <Box as="span" className="icon-facebook" />
                </Link>
                <Link href="#">
                  <Box as="span" className="icon-instagram" />
                </Link>
                <Link href="#">
                  <Box as="span" className="icon-youtube" />
                </Link>
              </HStack>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="start">
              <Text fontSize="lg" fontWeight="bold">
                Providence Health
              </Text>
              <Link href="#">Starting here for a healthier tomorrow</Link>
              <Box mt={4}>
                <Text align="start">Powered by</Text>
                <HStack spacing={4} mt={2}>
                  <Image
                    src="/images/medicalaid.png"
                    alt="Providence Medical Aid"
                    height={{ base: "5rem", md: "6rem" }}
                  />
                </HStack>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Box>

      <Box bg="#124538" color="whiteAlpha.800" height="6rem">
        <Flex
          direction={isMobile ? "column" : "row"}
          justify="space-between"
          align="center"
          maxW="1200px"
          mx="auto"
          p={{ base: 5, md: 6 }}
          bg="#124538"
        // pt={5}
        >
          <Text>©2024 Providence Human Capital</Text>
          <Link href="#" fontSize={12} mx={2}>
            Email Disclaimer
          </Link>
          <Link href="#" fontSize={12} mx={2}>
            PAIA Manual
          </Link>
          <Link href="#" fontSize={12} mx={2}>
            Complaints management policy
          </Link>
          <Link href="#" fontSize={12} mx={2}>
            Conflict of Interest Policy
          </Link>
          <Link href="#" fontSize={12} mx={2}>
            Treating customers Fairly Policy
          </Link>
          <Link href="#" fontSize={12} mx={2}>
            Privacy Policy
          </Link>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
