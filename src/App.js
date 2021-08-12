import logo from "./logo.svg";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Login from "./components/Login";
import { Box } from "@chakra-ui/react";

function App({ Component }) {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
}

export default App;
