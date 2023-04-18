import { Box, Button, Container, Input } from "@mui/material";
import { useEffect, useState } from "react";
import { useStoreDispatch } from "../redux/store";
import { deleteUser, getUsers } from "../redux/UserRedux/UserRedux";
import { useSelector } from "react-redux";
import { getUsersSelector } from "../redux/UserRedux/UserSelector";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { ModalDialogProps } from "@mui/joy/ModalDialog";
import { ModalUsers } from "../Components/Modal/ModalUsers";
import FormUserCreate from "../Components/views/Users/FormUserCreate";
import { UsersTable } from "../Components/views/Users/UsersTable";

const Users = () => {
  const dispatch = useStoreDispatch();
  const userData = useSelector(getUsersSelector);
  const [searchField, setSearchField] = useState("");
  const [isOpenDelete, setIsOpenDelete] = useState("");
  const onOpenDelete = (id: number) => {
    setIsOpenDelete(id.toString() + "m");
  };
  const [isOpenEdit, setIsOpenEdit] = useState(0);
  const [layout, setLayout] = useState<ModalDialogProps["layout"] | undefined>(
    undefined
  );
  const [layoutTwo, setLayoutTwo] = useState<
    ModalDialogProps["layout"] | undefined
  >(undefined);
  const [layoutThree, setLayoutThree] = useState<
    ModalDialogProps["layout"] | undefined
  >(undefined);
  const onOpenEdit = (id: number) => {
    setIsOpenEdit(id);
  };
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
              setLayoutThree("center");
            }}
          >
            Add user
          </Button>

          <ModalUsers
            h={"Add user"}
            setLayout={setLayoutThree}
            layout={layoutThree}
          >
            <FormUserCreate />
          </ModalUsers>
        </Box>
      </Box>
      <UsersTable
        userDataFilter={userDataFilter}
        setLayoutTwo={setLayoutTwo}
        onOpenEdit={onOpenEdit}
        onOpenDelete={onOpenDelete}
        onDeleteUser={onDeleteUser}
        isOpenDelete={isOpenDelete}
        isOpenEdit={isOpenEdit}
        layoutTwo={layoutTwo}
        layout={layout}
        setLayout={setLayout}
      />
    </Container>
  );
};

export default Users;
