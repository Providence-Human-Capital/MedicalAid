import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" minHeight="400vh">
        <NavigationBar />
        <Box as="main" flex="1">
          {/* Main content of your application */}
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
