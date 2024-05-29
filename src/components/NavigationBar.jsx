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
} from "@chakra-ui/react";
import { TriangleDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [menu, setMenu] = useState(false)
  const location = useLocation()

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

  const handleHover = () => {
    setMenu(true);
    console.log('first')
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
            <Menu position="relative">
              <MenuButton as={Link} style={{ color: "#fff" }} color="white" fontWeight="200" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                Medical Insurance
                <TriangleDownIcon ml={1} />
              </MenuButton>
              {menu && (
                <Box onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  zIndex="1"
                  position="absolute"
                  top={{ base: "100%", lg: "100%", xl: "93%", "2xl": "92%" }}
                  left={{ base: "0%", lg: "0%", xl: "5%", "2xl": "18%" }}
                  width={{ base: "18%", lg: "18%", xl: "15%", "2xl": "10%" }}
                  bg="white"
                  boxShadow="lg"
                >

                  <MenuItem>Doctors</MenuItem>
                  <MenuItem>Optometry</MenuItem>
                  <MenuItem>Dentist</MenuItem>
                </Box>
              )}

            </Menu>
            <span style={{ color: "#fff" }}>|</span>
            <Link
              style={{ color: "#fff" }}
              href="#"
              fontWeight="200"
            >
              Gap Cover
              <TriangleDownIcon ml={1} />
            </Link>
            <span style={{ color: "#fff" }}>|</span>
            {location.pathname === "/contact/us" ?
              <Link
                style={{ color: "#1F7", }}
                to="/contact/us"
                fontWeight="200"
                className="link"
              >
                Contact
              </Link>
              :
              <Link
                to="/contact/us"
                fontWeight="200"
                className="link"
              >
                Contact
              </Link>
            }
            <span style={{ color: "#fff" }}>|</span>
            {location.pathname === '/self/service' ?
              <Link
                style={{ color: "#1F7" }}
                to={"/self/service"}
                fontWeight="200"
                className="link"
              >
                Self Support
              </Link>
              :
              <Link
                to={"/self/service"}
                fontWeight="200"
                className="link"
              >
                Self Support
              </Link>
            }

            <span style={{ color: "#fff" }}>|</span>
            <Link
              href="#"
              fontWeight="200"
              className="link"
            >
              Lifestyle Benefits
            </Link>
            <span style={{ color: "#fff" }}>|</span>
            <Link
              href="#"
              fontWeight="200"
              className="link"
            >
              Info Hub
            </Link>
            <span style={{ color: "#fff" }}>|</span>
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
            />
            <Button
              bg="#fff"
              color="black"
              fontSize={13}
              fontWeight="300"
              borderRadius={20}
              width="100%"
            >
              FIND A DOCTOR
            </Button>
            <Button
              bg="#fff"
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
                  bg="#fff"
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
                  bg="#fff"
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
    </Box >
  );
};

export default NavigationBar;
