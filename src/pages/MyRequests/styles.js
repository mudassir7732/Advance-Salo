import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    flexDirection: "column",
    alignItems:'center',
  },
  TableHeading: {
    fontWeight: "900 !important",
    textAlign: "center !important",
    color: "#fff !important",
    backgroundColor: "#0b132b !important",
    fontSize: "16px !important",
  },
  TableCell: {
    textAlign:'center !important',
    fontSize: "16px !important",
  },
  HighlightedCell: {
    backgroundColor: "skyblue",
    width: "fit-content",
    padding: "4px",
    margin: "auto !important",
  },
}));
export default useStyles;
