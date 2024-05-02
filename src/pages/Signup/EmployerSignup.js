import { Box, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/index";
import { Select } from "../../components/Select";
import TextInput from "../../components/TextInput/index";
import useStyles from "./styles";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login_user } from "../../store/reducers/loginSlice";

const ValidationSchema = yup.object({
  salutation: yup.string("Salutation").required("Salutation required"),
  firstName: yup.string("Enter First Name").required("First name required"),
  lastName: yup.string("Enter Last Name").required("Last name required"),
  companyName: yup
    .string("Enter Company Name")
    .required("Company Name required"),
  country: yup.string().required("Country name required"),
  city: yup.string().required("City name required"),
  role: yup.string().required("Role required"),
  mobileNumber: yup
    .number()
    .typeError("Enter Numbers only")
    .min(12, "Mobile number required")
    .required("Mobile number required"),
  language: yup.string("Language").required("Select Preferred Language"),
});

export default function EmployerSignup() {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();

  const RegisterEmployer = (v) => {
    dispatch(login_user({ v }));
    navigate("/my-requests");
  };

  return (
    <Box className={classes.Container}>
      <Box
        className={classes.Card}
        sx={{ boxShadow: 8, marginBlock: "2vh", backgroundColor: "#fff" }}
      >
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
              country: "",
              city: "",
              role: "",
              mobileNumber: null,
              language: "",
            }}
            validationSchema={ValidationSchema}
            onSubmit={(values) => RegisterEmployer(values)}
          >
            {({ handleSubmit, handleChange, values, errors, touched }) => (
              <Form>
                <Box className={classes.ParallelInputs} sx={{ mt: "5px" }}>
                  <Select
                    name="salutation"
                    value={values.salutation}
                    label="Salutation"
                    onChange={handleChange}
                    variant="outlined"
                    options={["Mr", "Mrs"]}
                    error={errors.salutation && touched.salutation}
                    helperText={
                      errors.salutation &&
                      touched.salutation &&
                      errors.salutation
                    }
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
                <Box className={classes.ParallelInputs} sx={{ mt: "5px" }}>
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
                    // startImage={Flag}
                    style={{ minWidth: "48%" }}
                  />
                </Box>
                <Box className={classes.ParallelInputs} sx={{ mt: "5px" }}>
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
                  style={{marginBlock:'1.2vh', width:'100%' }}
                />
                </Box>
                <Box className={classes.ParallelInputs} sx={{ mt: "5px" }}>
                  <TextInput
                    label="Country"
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    error={errors.country && touched.country}
                    helperText={
                      errors.country && touched.country && errors.country
                    }
                    // startImage={Flag}
                    style={{ minWidth: "48%" }}
                  />
                  <TextInput
                    label="City"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    error={errors.city && touched.city}
                    helperText={errors.city && touched.city && errors.city}
                    // startImage={Flag}
                    style={{ minWidth: "48%" }}
                  />
                </Box>
                <Box className={classes.ParallelInputs} sx={{ mt: "5px" }}>
                  <Select
                    name="role"
                    value={values.role}
                    label="Role"
                    onChange={handleChange}
                    variant="outlined"
                    options={["English", "French"]}
                    error={errors.role && touched.role}
                    helperText={errors.role && touched.role && errors.role}
                  />
                  <Select
                    name="language"
                    value={values.language}
                    label="Language"
                    onChange={handleChange}
                    variant="outlined"
                    options={["English", "French"]}
                    error={errors.language && touched.language}
                    helperText={
                      errors.language && touched.language && errors.language
                    }
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "50px",
                    mt: "15px",
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
