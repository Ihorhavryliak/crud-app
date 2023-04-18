import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container sx={{ mt: "6rem" }}>
      <Box>
        <Grid
          container
          justifyContent={"center"}
          sx={{ backgroundColor: "#f1f1f173", py: "1rem" }}
        >
          <Typography variant="body2" sx={{ color: "#ddd" }} align="center">
            2023
          </Typography>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
