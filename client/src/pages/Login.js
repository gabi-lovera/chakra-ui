import { FormControl, FormLabel, Input, Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        history.push("/");
      }
    });
  };

  return (
    <Box className="box-log" p="6">
      <form className="form-log">
        <Box className="box-log-in" p="6">
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              type="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FormControl>
          <div className="loginStatus">{loginStatus}</div>
          <Button
            className="bt-log"
            colorScheme="teal"
            size="lg"
            onClick={login}
          >
            Logn in
          </Button>
        </Box>
      </form>
    </Box>
  );
}
