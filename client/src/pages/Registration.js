import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Box,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <Box>
      <Formik
        initialValues={{
          username: "",
          password: "",
          confirmPassword: "",
          email: "",
          provincia: "Córdoba",
          matricula: "",
          ciudad: "",
          direccion: "",
          type: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(data) => {
          if (key === "User") {
            Axios.post("http://localhost:3001/users/register", data)
          } else {
            Axios.post("http://localhost:3001/teacher/register", data);
          }
          history.push("/home");
        }}
      >
        {({ values, handleSubmit, errors, touched, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <Box className="box-log" p="6">
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input type="username" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
              <FormControl id="country">
                <FormLabel>Country</FormLabel>
                <Select placeholder="Select country">
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
              <FormControl id="start">
                  <Button
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"pink.400"}
                    href={"#"}
                    _hover={{
                      bg: "pink.300",
                    }}
                  >
                    Sign up
                  </Button>
                <Link to="/terms">
                  <Button
                    as={"a"}
                    fontSize={"sm"}
                    fontWeight={400}
                    variant={"link"}
                    href={"#"}
                  >
                    Terms and conditions
                  </Button>
                </Link>
              </FormControl>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
