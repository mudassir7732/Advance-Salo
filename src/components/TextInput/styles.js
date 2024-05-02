import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBlock: "0.8vh !important",
    "& label.Mui-focused": {
      color: `${theme.palette.inputHover.main}`,
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "1px solid orange",
    },
    "&.helper-text": {},
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: `${theme.palette.input.main}`,
        borderRadius: "34px",
      },
      "&:hover fieldset": {
        borderColor: `${theme.palette.inputHover.main}`,
        borderRadius: "34px",
      },
      "&.Mui-focused fieldset": {
        borderColor: `${theme.palette.inputHover.main}`,
      },
    },
  },
  error: {
    marginBlock: "0.1vh",
    "& label.Mui-focused": {
      color: `${theme.palette.error.main}`,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: `${theme.palette.error.main}`,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: `${theme.palette.error.main}`,
        borderRadius: "34px",
      },
      "&:hover fieldset": {
        borderColor: `${theme.palette.error.main}`,
        borderRadius: "34px",
      },
      "&.Mui-focused fieldset": {
        borderColor: `${theme.palette.error.main}`,
      },
    },
  },
}));
export default useStyles;
