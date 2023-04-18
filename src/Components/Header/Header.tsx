import { Box, Link } from "@mui/material";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container sx={{ mb: 3 }}>
      <Box
        textAlign={"center"}
        sx={{ backgroundColor: "#f2f2f173", py: "1rem" }}
      >
        <Link marginRight={5} component={NavLink} to="/">
          home
        </Link>
        <Link marginRight={5} component={NavLink} to="/users">
          users
        </Link>
      </Box>
    </Container>
  );
};
export default Header;
