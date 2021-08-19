import Axios from "axios";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Box,
  Button,
  Checkbox,
  TabPanels,
  Tab,
  Tabs,
  TabPanel,
  TabList,
} from "@chakra-ui/react";
import { useHistory, Link } from "react-router-dom";
import { Formik } from "formik";
import Swal from 'sweetalert2'
import * as yup from "yup";

export default function Registration() {
  const history = useHistory();
  const [tabIndex, setTabIndex] = useState(0);

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
    terms: yup.boolean().oneOf([true],'Message'),
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
          if (tabIndex === 0) {
            Axios.post("http://localhost:3001/users/register", data);
          } else {
            Axios.post("http://localhost:3001/teachers/register", data);
          }
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            showConfirmButton: false,
            timer: 1500
          })
          history.push("/");
        }}
      >
        {({ values, handleSubmit, errors, touched, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <Box className="box-reg-in" p="6">
              <Box className="form-reg">
                <Tabs onChange={(index) => setTabIndex(index)}>
                  <TabList>
                    <Tab>User</Tab>
                    <Tab>Professor</Tab>
                  </TabList>
                  <TabPanels p="2rem">
                    <TabPanel>Register as user</TabPanel>
                    <TabPanel>Or register as porfessor</TabPanel>
                  </TabPanels>
                </Tabs>
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
                {tabIndex === 0 ? null : (
                  <FormControl
                    id="certificate"
                    isValid={touched.certificate && !errors.certificate}
                    isInvalid={touched.certificate && !!errors.certificate}
                  >
                    <FormLabel>Certificate</FormLabel>
                    <Input
                      name="certificate"
                      onChange={handleChange}
                      type="certificate"
                    />
                  </FormControl>
                )}
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
                <FormControl id="terms">
                  <Checkbox
                  className="check-terms"
                    name="terms"
                    feedback={errors.terms}
                    onChange={handleChange}
                    isInvalid={touched.terms && !!errors.terms}
                  >
                    Accept terms
                  </Checkbox>
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
