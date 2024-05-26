import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  components: {
    Navbar: {
      baseStyle: {
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 10,
        transition: "all 0.3s ease-in-out",
      },
      variants: {
        initial: {
          bg: "green.500",
          boxShadow: "lg",
          height: "12.5rem",
        },
        scrolled: {
          bg: "green.600",
          boxShadow: "md",
          height: "4.5rem",
          paddingTop: "1rem",
        },
      },
    },
  },
});

export default theme;
