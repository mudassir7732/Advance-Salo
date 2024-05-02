import { Box, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/index";
import TextInput from "../../components/TextInput/index";
import useStyles from "./styles";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login_user } from "../../store/reducers/loginSlice";
import { Select } from "../../components/Select";
import Flag from "../../assets/icons/kenya.png";

const ValidationSchema = yup.object({
  salutation: yup.string("Salutation").required("Salutation required"),
  firstName: yup.string("Enter First Name").required("First name required"),
  lastName: yup.string("Enter Last Name").required("Last name required"),
  companyName: yup
    .string("Enter Company Name")
    .required("Company Name required"),
  mobileNumber: yup
    .number()
    .typeError("Enter Numbers only")
    .min(12, "Mobile number required")
    .required("Mobile number required"),
  language: yup.string("Language").required("Select Preferred Language"),
});

export default function EmployeeSignup() {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();

  const users = useSelector((state) => state?.login);
  console.log(users, " = users");

  const RegisterEmployee = (v) => {
    dispatch(login_user({ v }));
    navigate("/my-requests");
  };

  return (
    <Box className={classes.Container}>
      <Box className={classes.Card} sx={{ boxShadow: 8, marginBlock: "2vh" }}>
        <Typography className={classes.CardTitle} sx={{ boxShadow: 8 }}>
          Register Your Profile
        </Typography>
        <Box className={classes.CardBody}>
          <Formik
            initialValues={{
              salutation: "",
              firstName: "",
              lastName: "",
              companyName: "",
              countryCode: +254,
              mobileNumber: null,
              language: "",
            }}
            validationSchema={ValidationSchema}
            onSubmit={(values) => RegisterEmployee(values)}
          >
            {({ handleSubmit, handleChange, values, errors, touched }) => (
              <Form>
                <Box className={classes.ParallelInputs} sx={{ mt: "20px" }}>
                  <Select
                    name="salutation"
                    value={values.salutation}
                    label="Salutation"
                    onChange={handleChange}
                    variant="outlined"
                    options={["Mr", "Mrs"]}
                    fullWidth={true}
                    error={errors.salutation && touched.salutation}
                    helperText={
                      errors.salutation &&
                      touched.salutation &&
                      errors.salutation
                    }
                    style={{ minWidth: "48%" }}
                  />
                  <TextInput
                    label="First Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    error={errors.firstName && touched.firstName}
                    helperText={
                      errors.firstName && touched.firstName && errors.firstName
                    }
                    style={{ minWidth: "48%" }}
                  />
                </Box>
                <Box className={classes.ParallelInputs} sx={{ mt: "20px" }}>
                  <TextInput
                    label="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    error={errors.lastName && touched.lastName}
                    helperText={
                      errors.lastName && touched.lastName && errors.lastName
                    }
                    style={{ minWidth: "48%" }}
                  />
                  <TextInput
                    label="Company Name"
                    name="companyName"
                    value={values.companyName}
                    onChange={handleChange}
                    error={errors.companyName && touched.companyName}
                    helperText={
                      errors.companyName &&
                      touched.companyName &&
                      errors.companyName
                    }
                    style={{ minWidth: "48%" }}
                  />
                </Box>
                <Box className={classes.ParallelInputs} sx={{ mt: "20px" }}>
                  <TextInput
                    label="Mobile Number"
                    name="mobileNumber"
                    value={values.mobileNumber}
                    onChange={handleChange}
                    error={errors.mobileNumber && touched.mobileNumber}
                    helperText={
                      errors.mobileNumber &&
                      touched.mobileNumber &&
                      errors.mobileNumber
                    }
                    startImage={Flag}
                    style={{ minWidth: "48%" }}
                  />
                  <Select
                    name="language"
                    value={values.language}
                    label="Language"
                    onChange={handleChange}
                    variant="outlined"
                    options={["English", "French"]}
                    fullWidth={true}
                    error={errors.language && touched.language}
                    helperText={
                      errors.language && touched.language && errors.language
                    }
                    style={{ minWidth: "48%" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: "10px",
                  }}
                >
                  <Button
                    title="Register"
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                    fullWidth={true}
                    style={{ marginBlock: "2.5vh", minWidth: "30vw" }}
                  />
                </Box>
              </Form>
            )}
          </Formik>

          <Box className={classes.LastBlock}>
            <Typography
              sx={{ fontSize: "17px", pt: "6px", fontWeight: "regular" }}
            >
              Already have an account?
            </Typography>
            <Button
              title="Login"
              fullWidth={true}
              variant="text"
              onClick={() => navigate("/")}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
