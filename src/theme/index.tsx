import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({});

const ThemeProvider = ({ children }: { children: any }) => (
  <ChakraProvider theme={theme} resetCSS>
    {children}
  </ChakraProvider>
);

export default ThemeProvider;
