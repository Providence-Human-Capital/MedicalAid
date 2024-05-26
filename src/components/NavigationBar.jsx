import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  Spacer,
  HStack,
  useBreakpointValue,
  useStyleConfig,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyles = useStyleConfig("Navbar", {
    variant: scrolled ? "scrolled" : "initial",
  });
  const displayMode = useBreakpointValue({ base: "none", md: "flex" });
  const mobileDisplayMode = useBreakpointValue({ base: "flex", md: "none" });

  return (
    <Box __css={navStyles}>
      <Box className="navbar-container">
        <Flex
          className="navbar-top"
          height={scrolled ? "0" : "9rem"}
          transition="height 0.3s ease-in-out"
          overflow="hidden"
        >
          <Flex align="center" px={4} width="100%">
            <Spacer />
            <Box fontSize="2xl" fontWeight="300" color="white">
              <Link to="/">
                <Image
                  src="/images/medicalaid2.png"
                  alt="Providence Medical Aid"
                  height="6rem"
                />
              </Link>
            </Box>
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
          </Flex>
        </Flex>
        <Flex
          className="navbar-bottom"
          align="center"
          justify="space-between"
          px={4}
          height="4rem"
          paddingTop="1rem"
          bg="#1F755F"
        >
          <Spacer />
          <HStack spacing={6} display={displayMode} marginRight={4}>
            <Link style={{color: "#fff"}} href="#" fontWeight="200" color="white">
              Medical Insurance   
            </Link>
            <span style={{ color: "#fff"}}>|</span>
            <Link style={{color: "#fff"}} href="#" fontWeight="200" color="white">
              Gap Cover
            </Link>
            <span style={{ color: "#fff"}}>|</span>
            <Link style={{color: "#fff"}} to="/contact/us" fontWeight="200" color="white">
              Contact
            </Link>
            <span style={{ color: "#fff"}}>|</span>
            <Link  style={{color: "#fff"}} to={"/self/service"} fontWeight="200" color="white">
              Self Support
            </Link>
            <span style={{ color: "#fff"}}>|</span>
            <Link style={{color: "#fff"}} href="#" fontWeight="200" color="white">
              Lifestyle Benefits
            </Link>
            <span style={{ color: "#fff"}}>|</span>
            <Link style={{color: "#fff"}} href="#" fontWeight="200" color="white">
              Info Hub
            </Link>
            <span style={{ color: "#fff"}}>|</span>
          </HStack>

          <HStack spacing={4} display={displayMode}  marginBottom="">
            <Button
              bg="#DAA520"
              color="green"
              fontSize={13}
              fontWeight="500"
              borderRadius={20}
            >
              FIND A DOCTOR
            </Button>
            <Button
              bg="#DAA520"
              color="green"
              fontSize={13}
              fontWeight="500"
              borderRadius={20}
            >
              CHECK PRICES
            </Button>
          </HStack>
          <HStack display={mobileDisplayMode} spacing={4}>
            <IconButton
              icon={<HamburgerIcon />}
              variant="none"
              color="white"
              onClick={onOpen}
              fontSize="2rem"
              aria-label="Open Menu"
            />
            <Button
              bg="#DAA520"
              color="black"
              fontSize={13}
              fontWeight="300"
              borderRadius={20}
              width="100%"
            >
              FIND A DOCTOR
            </Button>
            <Button
              bg="#DAA520"
              color="black"
              fontSize={13}
              fontWeight="300"
              borderRadius={20}
              width="100%"
            >
              CHECK PRICES
            </Button>
          </HStack>
          <Spacer />
        </Flex>
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton color="#fff" />
            <DrawerHeader alignContent="center" backgroundColor="green.600">
              <Image
                src="/images/medicalaid.png"
                alt="Providence Medical Aid"
                height="6rem"
              />
            </DrawerHeader>
            <DrawerBody>
              <VStack spacing={6}>
                <Link href="#" onClick={onClose}>
                  Medical Insurance
                </Link>
                <Link href="#" onClick={onClose}>
                  Gap Cover
                </Link>
                <Link href="#" onClick={onClose}>
                  Contact
                </Link>
                <Link href="#" onClick={onClose}>
                  Self Support
                </Link>
                <Link href="#" onClick={onClose}>
                  Lifestyle Benefits
                </Link>
                <Link href="#" onClick={onClose}>
                  Info Hub
                </Link>
                <Button
                  bg="#DAA520"
                  color="black"
                  fontSize={13}
                  fontWeight="300"
                  borderRadius={20}
                  width="100%"
                  onClick={onClose}
                >
                  FIND A DOCTOR
                </Button>
                <Button
                  bg="#DAA520"
                  color="black"
                  fontSize={13}
                  fontWeight="300"
                  borderRadius={20}
                  width="100%"
                  onClick={onClose}
                >
                  CHECK PRICES
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default NavigationBar;
