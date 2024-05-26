import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";
import CallMeBack from "./components/CallMeBack";
import CoverSection from "./components/CoverSection";
import FAQSection from "./components/FAQSection";

const App = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <NavigationBar />
        <Box as="main" flex="1" pt={{ base: "12.5rem", md: "12.5rem" }}>
          <CallMeBack />
          <CoverSection />
          {/* Main content of your application */}
          <FAQSection />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default App;
