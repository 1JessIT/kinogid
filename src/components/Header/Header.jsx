import { AppBar, Box } from "@mui/material";
import { MyHeader, TopHeader } from "./styles";
import { Logo } from "../../globalStyles";
import { Link } from "react-router-dom";
import StarsIcon from "@mui/icons-material/Stars";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import SearchForm from "./Search/Search";

export const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#fff",
        padding: 0,
      }}
    >
      <TopHeader />
      <MyHeader>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo variant="h1" href="/">
              KINOGID
            </Logo>
          </Link>
          <SearchForm />
        </Box>
        <Box sx={{ color: "red", marginLeft: "200px" }}>
          <StarsIcon />
          <AccountCircleIcon />
        </Box>
      </MyHeader>
    </AppBar>
  );
};
