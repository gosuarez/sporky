import { extendTheme, ThemeConfig, StyleFunctionProps } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f8f8f8",
      100: "#eeeeee",
      200: "#e0e0e0",
      300: "#cfcfcf",
      400: "#bcbcbc",
      500: "#9e9e9e",
      600: "#7c7c7c",
      700: "#5c5c5c",
      800: "#3d3d3d",
      900: "#2b2b2b",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === "dark" ? "#2e2a27" : "#e9e4d2",
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
      },
    }),
  },
});

export default theme;
