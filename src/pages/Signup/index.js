import { Box, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowForwardIos } from "@mui/icons-material";
import useStyles from "./styles";
import {Button} from "../../components/Button";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Box className={classes.Container} sx={{ overflowY: "hidden" }}>
      <Box className={classes.Card} sx={{ boxShadow: 8 }}>
        <Typography className={classes.CardTitle} sx={{ boxShadow: 8 }}>
          Select Account Type
        </Typography>
        <Box
          sx={{ minHeight: "30vh", justifyContent: "space-evenly" }}
          className={classes.CardBody}
        >
          <Button
            title="Register as Employer"
            variant="contained"
            // style={{ marginBlock: "30px" }}
            fullWidth={true}
            endIcon={<ArrowForwardIos />}
            onClick={() => navigate("/employer-signup")}
          />
          <Button
            title="Register as Employee"
            variant="contained"
            endIcon={<ArrowForwardIos />}
            // style={{ marginBottom: "35px" }}
            fullWidth={true}
            onClick={() => navigate("/employee-signup")}
          />
        </Box>
      </Box>
    </Box>
  );
}
