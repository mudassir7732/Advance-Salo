import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  SideNavigationContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
  },
  SidebarContainer: {
    [theme.breakpoints.down("sm")]: {
      minHeight: "58vh !important",
      maxWidth: "240px",
      marginLeft: "4px",
      borderRadius: 6,
    },
    [theme.breakpoints.up("sm")]: {
      minHeight: "87.8vh",
      maxWidth: "280px",
      marginLeft: "7px",
      marginTop: "5px !important",
      borderRadius: 6,
    },
    backgroundColor: "#d0dff2",
    position: "fixed",
    border: "0.5px solid #afc0e9",
  },
  SidebarLogo: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      minHeight: "8vh",
    },
    [theme.breakpoints.up("sm")]: {
      minHeight: "12vh",
    },
    justifyContent: "center",
    alignItems: "center",
  },
  Logo: {
    [theme.breakpoints.down("sm")]: {
      width: "70px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100px",
    },
  },
  SidebarIcons: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px !important",
      paddingRight: "4px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px !important",
      paddingRight: "10px",
    },
  },
  SidebarButton: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  ButtonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#adceff",
    },
    [theme.breakpoints.down("sm")]: {
      height: "5.6vh",
      paddingInline: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "8vh",
      paddingInline: "20px",
    },
  },
  SidebarWidth: {
    width:'20vw',
  },
  ChildrenBlock: {
    marginLeft: "20vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80vw",
  },
}));
export default useStyles;
