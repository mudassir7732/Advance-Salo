import { Box, Divider } from "@mui/material";
import SideBar from "./SideBar";
import useStyles from "./styles";

export default function SideNavigation({ children }) {
  const classes = useStyles();
  return (
    <Box className={classes.SideNavigationContainer}>
      <SideBar className={classes.SidebarWidth}/>
      <Box className={classes.ChildrenBlock}>{children}</Box>
    </Box>
  );
}
