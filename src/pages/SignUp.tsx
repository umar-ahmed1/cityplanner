import React, { useState } from "react";
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  Button,
  TextField,
  Typography,
} from "@mui/material";

type SignUpProps = {};

type SignupForm = {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
};

const SignUp: React.FC<SignUpProps> = () => {
  const [signupForm, setSignupForm] = useState<SignupForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const checkEmail = (email: string) => {
    setEmailError("");
    const emailRegex = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+)\.([a-zA-Z]{1,5})$/;
    const isValid = emailRegex.test(email);
    if (!isValid && email != "") setEmailError("Email not valid");
  };

  const checkPassword = (password: string) => {
    setPasswordError("");
    if (password != signupForm.password)
      setPasswordError("Password does not match");
  };

  const submitForm = () => {
    firstNameBool: Boolean = checkFirstName(signupForm.firstName)
  }

  const checkFirstName = (firstName: String) => {
    setFirstNameError("");
    if (!signupForm.firstName.trim()) {
        setFirstNameError("First name is required.");
        return false;
    }
  };

  const checkLastName = (lastName: String) => {
    setLastNameError("");
    if (!signupForm.lastName.trim()) {
        setLastNameError("Last name is required.");
        return false;
    }
  };

  return (
    <Box
      width="100%"
      height="100vh"
      sx={{ display: "flex", flexDirection: "column" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <FormControl sx={{ padding: 1 }}>
        <TextField
          id="email"
          value={signupForm.email}
          onChange={(event) =>
            setSignupForm((prev) => ({ ...prev, email: event.target.value }))
          }
          onBlur={(event) => checkEmail(event.target.value)}
          label="Email"
          variant="outlined"
        />
        {emailError && (
          <Typography
            sx={{
              color: "primary",
              FontSize: "90px",
            }}
          >
            {emailError}
          </Typography>
        )}
      </FormControl>
      <FormControl sx={{ padding: 1 }}>
        <TextField
          id="firstName"
          value={signupForm.firstName}
          onChange={(event) =>
            setSignupForm((prev) => ({
              ...prev,
              firstName: event.target.value,
            }))
          }
          label="First Name"
          variant="outlined"
        />
        {firstNameError && (
          <Typography
            sx={{
              color: "error.main",
              FontSize: "90px",
            }}
          >
            {firstNameError}
          </Typography>
        )}
      </FormControl>
      <FormControl sx={{ padding: 1 }}>
        <TextField
          id="lastName"
          value={signupForm.lastName}
          onChange={(event) =>
            setSignupForm((prev) => ({ ...prev, lastName: event.target.value }))
          }
          label="Last Name"
          variant="outlined"
        />
        {lastNameError && (
          <Typography
            sx={{
              color: "error.main",
              FontSize: "90px",
            }}
          >
            {lastNameError}
          </Typography>
        )}
      </FormControl>
      <FormControl sx={{ padding: 1 }}>
        <TextField
          id="password"
          value={signupForm.password}
          onChange={(event) =>
            setSignupForm((prev) => ({ ...prev, password: event.target.value }))
          }
          label="Password"
          variant="outlined"
          type="password"
        />
      </FormControl>
      <FormControl sx={{ padding: 1 }}>
        <TextField
          id="confirmPassword"
          onBlur={(event) => checkPassword(event.target.value)}
          label="Confirm Password"
          variant="outlined"
          type="Password"
        />
        {passwordError && (
          <Typography
            sx={{
              color: "error.main",
              FontSize: "90px",
            }}
          >
            {passwordError}
          </Typography>
        )}
      </FormControl>
      <Box sx={{ display: "flex" }} justifyContent={"flex-end"}>
        <Button onClick={() => submitForm()} variant="contained" sx={{ width: "100%" }}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
