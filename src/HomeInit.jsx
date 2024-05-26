import { Box } from "@chakra-ui/react";
import React from "react";
import NavigationBar from "./components/NavigationBar";

import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const HomeInit = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <NavigationBar />
        <Box as="main" flex="1" pt={{ base: "12.5rem", md: "12.5rem" }}>
          {/* <CallMeBack />
          <CoverSection />
          <FAQSection /> */}
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default HomeInit;
