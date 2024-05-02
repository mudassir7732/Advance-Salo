import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth:'100px !important',
    backgroundColor: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: `${theme.palette.input.main}`,
    },
    "&:hover $notchedOutline": {
      borderColor: "red",
    },
    "& focused $notchedOutline": {
      borderColor: "green !important",
    },
  },
  error: {
    marginBlock: "0px !important",
    "&.MuiOutlinedInput-root": {
      border: "none",
      marginTop: "4px !important",
    },
  },
}));
export default useStyles;
