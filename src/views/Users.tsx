import {
  Box,
  Button,
  Container,
  Input,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useStoreDispatch } from "../redux/store";
import { deleteUser, getUsers } from "../redux/UserRedux/UserRedux";
import { useSelector } from "react-redux";
import { getUsersSelector } from "../redux/UserRedux/UserSelector";
import { NavLink } from "react-router-dom";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { ModalDialogProps } from "@mui/joy/ModalDialog";
import { FormUserCreate } from "../Components/views/Users/FormUserCreate";
import { ModalUsers } from "../Components/Modal/ModalUsers";

const Users = () => {
  const dispatch = useStoreDispatch();
  const userData = useSelector(getUsersSelector);
  const [searchField, setSearchField] = useState("");

  const [layout, setLayout] = useState<ModalDialogProps["layout"] | undefined>(
    undefined
  );

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleSearchField = (text: string) => setSearchField(text);
  const userDataFilter = userData.filter((f) =>
    f.name.toLowerCase().includes(searchField.toLowerCase())
  );
  const onDeleteUser = (id: number) => {
    dispatch(deleteUser(id));
  };

  return (
    <Container sx={{ mt: 2 }}>
      <Box
        sx={{ display: "flex" }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box sx={{ display: "flex" }} alignItems={"center"} gap="10px">
          <FormControl>
            <FormLabel sx={{ m: 0 }}>Search</FormLabel>
            <Box>
              <Input
                placeholder="Enter name…"
                onChange={(e) => handleSearchField(e.target.value)}
              />
            </Box>
          </FormControl>
        </Box>
        <Box>
          <Button
            variant="contained"
            onClick={() => {
              setLayout("center");
            }}
          >
            Add user
          </Button>
          <ModalUsers setLayout={setLayout} layout={layout}>
            <FormUserCreate />
          </ModalUsers>
        </Box>
      </Box>
      {/* table */}
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">id</TableCell>
              <TableCell align="left">name</TableCell>
              <TableCell align="left">username</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDataFilter.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.username}</TableCell>

                <TableCell align="right">
                  <Link component={NavLink} to={`/user/${row.id}`}>
                    view
                  </Link>{" "}
                </TableCell>

                <TableCell align="right">
                  <Button
                    color="inherit"
                    sx={{ mr: 2 }}
                    variant="contained"
                    onClick={() => onDeleteUser(row.id)}
                  >
                    {" "}
                    Edit
                  </Button>
                  <Button
                    color="warning"
                    variant="contained"
                    onClick={() => onDeleteUser(row.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Users;
