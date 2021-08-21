import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Sell from "./pages/Sell";
import Registration from "./pages/Registration";
import Terms from "./pages/Terms";
import Product from "./components/Product";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AuthContext } from "./helpers/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App({ Component }) {
  const [authState, setAuthState] = useState({
    username: "",
    idUser: 0,
    isUser: false,
    status: false,
  });

  return (
    <div className="app-bg">
      <ChakraProvider>
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/users">
                <Users />
              </Route>
              <Route exact path="/sell">
                <Sell />
              </Route>
              {authState.status ? (
                <Route exact path="/product/:id">
                  <Product />
                </Route>
              ) : (
                <Login />
              )}
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Registration />
              </Route>
              <Route path="/terms">
                <Terms />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </AuthContext.Provider>
      </ChakraProvider>
    </div>
  );
}

export default App;
