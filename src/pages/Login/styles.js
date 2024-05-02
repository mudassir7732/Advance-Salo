import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  Container: {
    height: "90vh",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "hidden",
    justifyContent: "center",
    backgroundColor: "#f8fbf8",
  },
  InnerContainer: {
    // minWidth:'25vw',
    borderRadius: "5px",
    maxWidth: "80vw",
    paddingInline: "2vw",
    paddingBlock: "3vh",
  },
  AppName: {
    fontSize: "30px  !important",
    color: `${theme.palette.primary.main}`,
    // fontFamily:'Marryweather !important',
    fontFamily: "PT Serif !important",
    textAlign: "center",
    paddingBottom: "3vh",
    fontWeight: "900 !important",
    textDecorationLine: "underline",
    [theme.breakpoints.up("xs")]: {
      fontSize: "20px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "25px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "30px !important",
    },
  },

  Title: {
    fontSize: "20px !important",
    alignSelf: "center",
    textAlign: "left",
    fontWeight: "600 !important",
    typography: {
      fontSize: {
        xs: "body1",
        sm: "body2",
      },
    },
  },
  LastBlock: {
    display: "flex",
    [theme.breakpoints.down("mxs")]: {
      flexDirection: "column !important",
    },
    [theme.breakpoints.up("mxs")]: {
      flexDirection: "row",
    },
    flexWrap: "wrap",
  },
  SignUp: {
    fontSize: "13.5px !important",
    paddingTop: "3px",
    fontWeight: "900 !important",
  },
  RememberBlock:{
    display:'flex',
    [theme.breakpoints.down('xsm')]:{
      flexDirection:'column'
    },
    [theme.breakpoints.up('xsm')]:{
      flexDirection:'row'
    },
    justifyContent:'space-between',

  }
}));
export default useStyles;
