import Axios from "axios";
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
import { useHistory, Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";

export default function Registration() {
  const history = useHistory();
  const SignupSchema = yup.object().shape({
    password: yup
      .string()
      .min(5, "to short")
      .max(15, "to large")
      .required("it is requeried"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    email: yup.string().email("invalid email").required("is necessary"),
    terms: yup
      .array()
      .required("should accept terms and conditions")
      .min(1, "should accept terms and conditions"),
  });
  return (
    <Box className="box-reg" p="6">
      <Formik
        initialValues={{
          username: "",
          password: "",
          confirmPassword: "",
          email: "",
          country: "United Arab Emirates",
          certificate: "",
          type: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(data) => {
          //if () {
          Axios.post("http://localhost:3001/users/register", data);
          //} else {
          Axios.post("http://localhost:3001/teacher/register", data);
          //}
          history.push("/home");
        }}
      >
        {({ values, handleSubmit, errors, touched, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <Box className="box-reg-in" p="6">
              <Box className="form-reg">
                <FormControl
                  id="username"
                  isValid={touched.username && !errors.username}
                  isInvalid={touched.username && !!errors.username}
                >
                  <FormLabel>Username</FormLabel>
                  <Input
                    name="username"
                    onChange={handleChange}
                    type="username"
                  />
                  <FormErrorMessage type="invalid">
                    {errors.username}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  id="password"
                  isValid={touched.password && !errors.password}
                  isInvalid={touched.password && !!errors.password}
                >
                  <FormLabel>Password</FormLabel>
                  <Input
                    name="password"
                    onChange={handleChange}
                    type="password"
                  />
                  <FormErrorMessage type="invalid">
                    {errors.password}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  id="passwordConfirmation"
                  isValid={
                    touched.passwordConfirmation && !errors.passwordConfirmation
                  }
                  isInvalid={
                    touched.passwordConfirmation &&
                    !!errors.passwordConfirmation
                  }
                >
                  <FormLabel>Confirm password</FormLabel>
                  <Input
                    name="passwordConfirmation"
                    onChange={handleChange}
                    type="password"
                  />
                  <FormErrorMessage type="invalid">
                    {errors.passwordConfirmation}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  id="email"
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && !!errors.email}
                >
                  <FormLabel>Email address</FormLabel>
                  <Input name="email" onChange={handleChange} type="emaill" />

                  <FormHelperText>We'll never share your email.</FormHelperText>
                  <FormErrorMessage type="invalid">
                    {errors.email}
                  </FormErrorMessage>
                </FormControl>
                <FormControl id="country">
                  <FormLabel>Country</FormLabel>
                  <Select
                    name="country"
                    onChange={handleChange}
                    placeholder="Select country"
                  >
                    <option>United Arab Emirates</option>
                    <option>Nigeria</option>
                  </Select>
                </FormControl>
                <FormControl className="buttom-reg">
                  <Button
                    type="submit"
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
                      className="terms"
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
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}
