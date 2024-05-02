import { Gradient } from "react-gradient";
import useStyles from "./styles";
import Logo from "../../assets/icons/logo.png";
import { Box, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggle_sidebar } from "../../store/reducers/toggleSidebar";

export default function Header() {
  const [menuVisible, setMenuVisibility] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const gradients = [
    ["#0b132b", "#3a506b"],
    // ['#0d1b2a', '#415a77'],
  ];
  const callSidebar = () => {
    setMenuVisibility(!menuVisible);
    dispatch(toggle_sidebar(menuVisible))
  };
  return (
    <>
      <Gradient
        gradients={gradients}
        className={classes.Container}
        duration={3000}
        angle="45deg"
      >
        <Box className={classes.HeaderContainer}>
          <img
            src={Logo}
            style={{ height: "3.8vh" }}
            className={classes.Logo}
          />
        </Box>
        <Menu
          sx={{ color: "#fff", padding: "15px" }}
          onClick={callSidebar}
          className={classes.Menu}
        />
        <Typography
          sx={{ color: "#fff", fontWeight: "600", marginRight: "4vw" }}
        >
          Advance Salo
        </Typography>
      </Gradient>
    </>
  );
}
