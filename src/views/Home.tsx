import { Box, Container, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Typography variant="h2">Welcome!</Typography>
      <Typography sx={{ mt: 2 }}>
        This CRUD application is developed using React, Redux-Toolkit and
        MaterialUI library for visualization. The application has three pages:
      </Typography>
      <Typography sx={{ mt: 2 }}>
        - a welcome page that contains a description of the application and a
        link to the user page;
      </Typography>
      <Typography sx={{ mt: 2 }}>
        - a page with a list of users, which displays a table with id, name and
        username fields of users obtained from an external API
        (https://jsonplaceholder.typicode.com/users). On this page, it is
        possible to search for users by their name and go to the page with the
        data of the selected user;
      </Typography>
      <Typography sx={{ mt: 2 }}>
        - the page with the data of the selected user, which contains all the
        data obtained for the selected user. On this page, it is possible to
        switch to the view of the next and previous user.
      </Typography>
      <Typography sx={{ mt: 2 }}>
        The application has the ability to add, edit and delete users using a
        modal window that is displayed on the pages with the list of users and
        with the data of the selected user. Validation for empty fields is also
        implemented on the forms for adding and editing users.
      </Typography>
      <Typography sx={{ mt: 2 }}>
        All user data is stored in the Redux repository using the Redux Toolkit.
        When creating a new user, the starting structure with all attachments is
        used. Entries that have been edited differ from other entries in font.
      </Typography>
      <Typography sx={{ mt: 2 }}>
        The result of the development is stored on the GitHub service with local
        commits of the developer. To start the application, you need to execute
        the "npm start" command.
      </Typography>
      <Box sx={{ mt: 2 }}>
        Go to
        <Link sx={{ ml: 1 }} component={NavLink} to="/users">
          User page
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
