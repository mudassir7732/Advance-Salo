import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  contained: {
    borderRadius: "30px !important",
    height: "50px",
    [theme.breakpoints.down("xsm")]: {
      width:'70vw !important',
    },
    background: `${theme.palette.button.main} !important`,
    color: "#fff !important",
    "&:hover": {
      background: `${theme.palette.hover.main} !important`,
      border: `${theme.palette.hover.main} !important`,
    },
    "&:disabled": {
      border: `1px solid ${theme.palette.disabled.main} !important`,
      color: `${theme.palette.disabled.contrastText} !important`,
      background: `${theme.palette.disabled.main} !important`,
    },
  },
  text: {
    paddingTop: "7.5px !important",
    "&:hover": {
      background: `${theme.palette.textButton.main} !important`,
    },
    "&:disabled": {
      color: `${theme.palette.disabled.main}`,
    },
  },
  outlined: {
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      background: "#fff",
      border: "#fff",
    },
    "&:disabled": {
      border: "#fff",
    },
  },
}));
export default useStyles;
