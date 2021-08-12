import logo from "./logo.svg";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

function App({ Component }) {
  return (
    <div className="app-bg">
    <ChakraProvider>
      
      <NavBar />
     
      <Login />
     
    </ChakraProvider>
    </div>
  );
}

export default App;
