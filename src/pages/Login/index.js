import React, { useState } from "react";
import {
  Box,
  Checkbox,
  Snackbar,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { Close, Room } from "@mui/icons-material";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import useStyles from "./styles";
import { Button } from "../../components/Button/index";
import TextInput from "../../components/TextInput";
import LocalStorageService from "../../utils/localStorageService";

const ValidationSchema = Yup.object({
  phoneNo: Yup.string("Enter phoneNo")
    .required("Phone No is required")
    .email("Invalid email format"),
  password: Yup.string("Enter Password")
    .required("No password provided")
    .min(6, "Password is too short"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("pass"), null],
    'Must match "password" field value'
  ),
});

export default function Login() {
  const [currentUserObj, setCurrentUserObj] = useState({});
  const [saveCredentials, setSaveCredentials] = useState(false);
  const [openSnackbar, setSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("Snackbar");
  const classes = useStyles();
  const navigate = useNavigate();
  // const CurrentUser = LocalStorageService.getCurrentUser();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <Button onClick={handleClose}>UNDO</Button>
      <IconButton onClick={handleClose}>
        <Close fontSize="small" sx={{ color: "white" }} />
      </IconButton>
    </React.Fragment>
  );

  const SendAPasswordResetEmail = (values) => {
    alert("Function Called");
  };

  const Login = (values) => {
    saveCredentials && setCurrentUserObj(values.email, values.password);
    LocalStorageService.setCurrentUser(values.email, values.password);
    // showUser();
  };

  // const showUser=()=>{
  //   console.log(LocalStorageService.getCurrentUser(), ' = Current User')
  // }

  const GoogleLogin = () => {};

  return (
    <Box className={classes.Container}>
      <Box className={classes.InnerContainer} sx={{ boxShadow: 8 }}>
        <Typography className={classes.AppName}>
          Welcome to Advance Salo
        </Typography>
        <Formik
          initialValues={{ phoneNo: "", password: "", rememberPassword: false }}
          validationSchema={ValidationSchema}
          onSubmit={(values) => Login(values)}
        >
          {({ handleSubmit, values, errors, touched, handleChange }) => (
            <Form>
              <TextInput
                label="Phone No"
                fullWidth={true}
                value={values.phoneNo}
                type="text"
                name="phoneNo"
                error={errors.phoneNo && touched.phoneNo}
                onChange={handleChange}
                helperText={errors.phoneNo && touched.phoneNo && errors.phoneNo}
              />
              <TextInput
                label="Password"
                value={values.password}
                type="password"
                name="password"
                onChange={handleChange}
                fullWidth={true}
                size="large"
                style={{ marginTop: "25px" }}
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password && errors.password
                }
              />
              <Box
                className={classes.RememberBlock}
                sx={{ justifyContent: "space-between" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Checkbox
                    name="rememberPassword"
                    checked={values.rememberPassword}
                    onChange={handleChange}
                  />
                  <Typography>Remember Me</Typography>
                </Box>
                <Button
                  title="Forgot Password"
                  onClick={(values) => SendAPasswordResetEmail(values)}
                />
              </Box>
              <Button
                title="Login"
                fullWidth={true}
                onClick={handleSubmit}
                size="large"
                type="submit"
                variant="contained"
                style={{ minWidth: "100%" }}
              />
            </Form>
          )}
        </Formik>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={openSnackbar}
          onClose={handleClose}
          autoHideDuration={4000}
          message={snackbarMessage}
          action={action}
        />
        <Box
          sx={{
            display: "flex",
            width: "99.5%",
            flexDirection: "row",
            marginTop: "25px",
          }}
        >
          <Divider
            sx={{
              width: "42%",
              height: "0.1px",
              mt: "10px",
              backgroundColor: "#404040",
            }}
          />
          <Typography sx={{ marginInline: "auto" }}>OR</Typography>
          <Divider
            sx={{
              width: "42%",
              height: "0.1px",
              mt: "10px",
              backgroundColor: "#404040",
            }}
          />
        </Box>
        <GoogleButton
          onClick={GoogleLogin}
          style={{
            width: "99.7%",
            borderRadius: 28,
            marginTop: "20px",
          }}
        />
        <Box className={classes.LastBlock}>
          <Typography
            sx={{
              fontSize: "17px",
              pt: "6px",
              textAlign: "center",
              fontWeight: "regular",
            }}
          >
            Don't have an account?
          </Typography>
          <Button
            title="Signup"
            fullWidth={true}
            onClick={() => navigate("/signup")}
          />

        </Box>
      </Box>
    </Box>
  );
}
