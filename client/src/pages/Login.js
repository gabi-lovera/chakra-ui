import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Select,
  Box,
} from "@chakra-ui/react";

export default function Login() {
  return (
    <Box>
      <Box className="box-log" p="6">
        <form>
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
        </form>
      </Box>
    </Box>
  );
}
