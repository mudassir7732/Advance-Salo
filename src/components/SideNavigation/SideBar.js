import { Box, Divider, Typography } from "@mui/material";
import useStyles from "./styles";
import Logo from "../../assets/icons/logo.png";
import {
  ListAltOutlined,
  LogoutOutlined,
  MonetizationOnOutlined,
  PrivacyTipOutlined,
  RequestQuoteOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SideBar() {
  const sidebar = useSelector((state) => state.toggle);
  console.log(sidebar, " = sidebar");

  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box
      className={classes.SidebarContainer}
      sx={{ display: sidebar ? "block" : "none", boxShadow: 18, zIndex: 1 }}
    >
      <Box className={classes.SidebarLogo}>
        <img src={Logo} className={classes.Logo} />
      </Box>
      <Box
        onClick={() => navigate("/my-requests")}
        className={classes.ButtonContainer}
      >
        <RequestQuoteOutlined className={classes.SidebarIcons} />
        <Typography className={classes.SidebarButton}>My Requests</Typography>
      </Box>
      <Divider className={classes.Divider} />
      <Box
        className={classes.ButtonContainer}
        onClick={() => navigate("/request-advance")}
      >
        <MonetizationOnOutlined className={classes.SidebarIcons} />
        <Typography className={classes.SidebarButton}>
          Request New Adnvace
        </Typography>
      </Box>
      <Divider className={classes.Divider} />
      <Box
        className={classes.ButtonContainer}
        sx={{ "&:hover": { backgroundColor: "#d0dff2" } }}
      />
      <Divider className={classes.Divider} />
      <Box
        className={classes.ButtonContainer}
        onClick={() => navigate("/profile-settings")}
      >
        <SettingsOutlined className={classes.SidebarIcons} />
        <Typography className={classes.SidebarButton}>
          Profile Settings
        </Typography>
      </Box>
      <Divider className={classes.Divider} />
      <Box
        className={classes.ButtonContainer}
        onClick={() => navigate("/terms-and-conditions")}
      >
        <ListAltOutlined className={classes.SidebarIcons} />
        <Typography className={classes.SidebarButton}>
          Terms and Conditions
        </Typography>
      </Box>
      <Divider className={classes.Divider} />
      <Box
        className={classes.ButtonContainer}
        onClick={() => navigate("/privacy-policy")}
      >
        <PrivacyTipOutlined className={classes.SidebarIcons} />
        <Typography className={classes.SidebarButton}>
          Privacy Policy
        </Typography>
      </Box>
      <Divider className={classes.Divider} />
      <Box
        className={classes.ButtonContainer}
        sx={{ "&:hover": { backgroundColor: "#d0dff2" } }}
      />
      <Divider className={classes.Divider} />
      <Box className={classes.ButtonContainer}>
        <LogoutOutlined className={classes.SidebarIcons} />
        <Typography className={classes.SidebarButton}>Logout</Typography>
      </Box>
    </Box>
  );
}
