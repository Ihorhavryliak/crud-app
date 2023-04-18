import { Box, Grid, Link } from "@mui/material";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Container>
      <Box textAlign={"center"}>
        <Link marginRight={5} component={NavLink} to="/">
          home
        </Link>
        <Link marginRight={5} component={NavLink} to="/users">
          users
        </Link>
        <Link component={NavLink} to="/user">
          user
        </Link>
      </Box>
    </Container>
  );
};
export default Header;
