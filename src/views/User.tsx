import { Box, Button, Container, Divider } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useStoreDispatch } from "../redux/store";
import { getUser } from "../redux/UserRedux/UserRedux";
import { useSelector } from "react-redux";
import {
  getPageIdSelector,
  getUserSelector,
} from "../redux/UserRedux/UserSelector";

const User = () => {
  const { id } = useParams();
  const dispatch = useStoreDispatch();
  const userData = useSelector(getUserSelector);
  const pageId = useSelector(getPageIdSelector);

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    dispatch(getUser(id));
  }, [location.pathname]);

  const onNextUser = () => {
    navigate(`/user/${pageId.nextPageId}`);
  };

  const onPreviousUser = () => {
    navigate(`/user/${pageId.previousPageId}`);
  };

  return (
    <Container>
      <Box sx={{ mb: 3 }}>
        <Button sx={{ mr: 2 }} variant="contained" onClick={onPreviousUser}>
          Previous User
        </Button>
        <Button variant="contained" onClick={onNextUser}>
          Next User
        </Button>
      </Box>
      {userData.length > 0 &&
        userData.map((m) => {
          return (
            <Box key={m.id}>
              <Box>id: {m.id}</Box>
              <Divider />
              <Box>{m.name}</Box>
              <Box>{m.email}</Box>
              <Box>{m.phone}</Box>
              <Box>{m.username}</Box>
              <Box>{m.website}</Box>
              <Divider />
              <Box>Company:</Box>
              <Box>{m.company.bs}</Box>
              <Box>{m.company.catchPhrase}</Box>
              <Box>{m.company.name}</Box>
              <Divider />
              <Box>Address:</Box>
              <Box>{m.address.city}</Box>
              <Box>{m.address.geo.lat}</Box>
              <Box>{m.address.geo.lng}</Box>
              <Box>{m.address.street}</Box>
              <Box>{m.address.suite}</Box>
              <Box>{m.address.zipcode}</Box>
            </Box>
          );
        })}
    </Container>
  );
};
export default User;
