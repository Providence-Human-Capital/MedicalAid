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
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  Center,
  Container
} from "@chakra-ui/react";
import { TriangleDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navStyles = useStyleConfig("Navbar", {
    variant: scrolled ? "scrolled" : "initial",
  });
  const displayMode = useBreakpointValue({ base: "none", md: "flex" });
  const mobileDisplayMode = useBreakpointValue({ base: "flex", md: "none" });

  const handleHover = () => {
    setMenu(true);
  };

  const handleLeave = () => {
    setMenu(false);
  };

  return (
    <Box __css={navStyles}>
      <Box className="navbar-container">
        <Flex
          className="navbar-top"
          height={scrolled ? "0" : "9rem"}
          transition="height 0.3s ease-in-out"
          overflow="hidden"
          justifyContent="center"
        >
          <Box p={3}>
            <Link to="/">
              <Image
                src="/images/medicalaid2.png"
                alt="Providence Medical Aid"
                height="7rem"
              />
            </Link>
          </Box>
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


            {location.pathname === "/self-service" ? (
              <Box
                style={{ color: "#1F7", textDecoration: '2px underline' }}
                to={"/self-service"}
                fontWeight="200"
                textUnderlineOffset={'5px'}
              >
                Self Support
              </Box>
            ) : (
              <Link to={"/self-service"} fontWeight="200" className="link">
                Self Support
              </Link>
            )}

            <span style={{ color: "#fff" }}>|</span>
            {location.pathname === "/living-style" ? (
              <>
                <Box
                  style={{ color: "#1F7", textDecoration: '2px underline' }}
                  fontWeight="200"
                  textUnderlineOffset={'5px'}
                >
                  Lifestyle Benefits
                </Box>
              </>
            ) : (
              <>
                <Link to={"/living-style"} fontWeight="200" className="link">
                  Lifestyle Benefits
                </Link>
              </>
            )}

            <span style={{ color: "#fff" }}>|</span>
            {location.pathname === "/info-hub" ? (
              <>
                <Box
                  style={{ color: "#1F7", textDecoration: '2px underline' }}
                  fontWeight="200"
                  textUnderlineOffset={'5px'}
                >
                  Info Hub
                </Box>
              </>
            ) : (

              <>
                <Link to={"/info-hub"} fontWeight="200" className="link">
                  Info Hub
                </Link>
              </>
            )}
            <span style={{ color: "#fff" }}>|</span>

            {location.pathname === "/contact-us" ? (
              <Box
                style={{ color: "#1F7", textDecoration: '2px underline' }}
                textUnderlineOffset={'5px'}
                to="/contact-us"
                fontWeight="200"
              >
                Contact
              </Box>
            ) : (
              <Link to="/contact-us" fontWeight="200" className="link">
                Contact
              </Link>
            )}

          </HStack>

          <HStack spacing={4} display={displayMode} marginBottom="">
            <Button
              bg="#fff"
              color="green"
              fontSize={13}
              fontWeight="600"
              borderRadius={20}
            >
              FIND A DOCTOR
            </Button>
            <Button
              bg="#fff"
              color="green"
              fontSize={13}
              fontWeight="600"
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
              mt={2}
            // left={'170px'}
            />
          </HStack>
          <Spacer />
        </Flex>
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton color="#fff" />
            <DrawerHeader alignContent="center" backgroundColor="green.600">
              <Center>
                <Image
                  src="/images/medicalaid2.png"
                  alt="Providence Medical Aid"
                  height="6rem"
                />
              </Center>
            </DrawerHeader>
            <DrawerBody>
              <VStack spacing={6} mt={6}>
                <Link to={"/contact-us"} onClick={onClose} className="phone-link">
                  Contact
                </Link>
                <Link to={"/self-service"} onClick={onClose} className="phone-link">
                  Self Support
                </Link>
                <Link to={"/living-style"} onClick={onClose} className="phone-link">
                  Lifestyle Benefits
                </Link>
                <Link to={"/info-hub"} onClick={onClose} className="phone-link">
                  Info Hub
                </Link>
                <Link href="#" onClick={onClose} className="phone-link">
                  Find a Doctor
                </Link>
                <Link href="#" onClick={onClose} className="phone-link">
                  Check Prices
                </Link>

              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default NavigationBar;
