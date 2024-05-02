import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

export default function PublicLayout({ children }) {
  return (
    <Box>
      <Header />
      <Box sx={{ paddingTop: "10vh" }}>{children}</Box>
      {/* <Footer /> */}
    </Box>
  );
}
