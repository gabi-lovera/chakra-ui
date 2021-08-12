import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";

export default function Login() {
  return (
    <Box className="box-log" p="6">
      <form className="form-log">
        <Box className="box-log-in" p="6">
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="username" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button className="bt-log" colorScheme="teal" size="lg">
            Logn in
          </Button>
        </Box>
      </form>
    </Box>
  );
}
