import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  Container: {
    minHeight: "90vh",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("xsm")]: {
      // overflowY: "hidden !important",
    },
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  Card: {
    minWidth: "32vw",
    borderRadius: "5px",
    backgroundColor:"#fff",
    maxWidth: "80vw",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  CardTitle: {
    textAlign: "center",
    paddingBlock: "6px",
    fontSize: "20px !important",
    color: "#fff",
    backgroundColor: `${theme.palette.primary.main}`,
    borderRadius: "5px 5px 0px 0px",
    textAlign: "center",
    paddingBlock: "15px",
  },
  CardBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent:'space-evenly',
    [theme.breakpoints.up("xsm")]: {
      paddingBlock: "2vh",
    },
    justifyContent: "center",
    paddingInline: "3vw",
  },
  ParallelInputs: {
    minWidth: "60vw",
    display: "flex",
    [theme.breakpoints.down("xsm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("xsm")]: {
      flexDirection: "row",
    },
    justifyContent: "space-between",
  },
  LastBlock: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("mxs")]: {
      flexDirection: "column !important",
    },
    [theme.breakpoints.up("mxs")]: {
      flexDirection: "row",
    },
    flexWrap: "wrap",
  },
}));
export default useStyles;
