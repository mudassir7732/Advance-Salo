import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  Container: {
    width: "100vw",
    paddingBlock: "0.5vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    zIndex: 1,
  },
  HeaderContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "block",
      backgroundColor: "white",
      borderRadius: "50px",
      height: "9vh",
      width: "9vh",
      borderRadius: "8vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "3vw",
    },
  },
  Logo: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  Menu: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
  },
}));
export default useStyles;
