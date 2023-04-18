import {
  Button, Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { ModalUsers } from "../../Modal/ModalUsers";
import FormUserEdit from "./FormUserEdit";
import { GetUserType } from "../../../api/userApi";

type UsersTableType = {
  userDataFilter: GetUserType[];
  setLayoutTwo: React.Dispatch<
    React.SetStateAction<"center" | "fullscreen" | undefined>
  >;
  setLayout: React.Dispatch<
  React.SetStateAction<"center" | "fullscreen" | undefined>
>;
  onOpenEdit: (id: number) => void;
  onOpenDelete: (id: number) => void;
  onDeleteUser: (id: number) => void;
  isOpenDelete: string;
  isOpenEdit: number;
  layoutTwo: "center" | "fullscreen" | undefined;
  layout: "center" | "fullscreen" | undefined;
};
export const UsersTable = (props: UsersTableType) => {
  const {
    userDataFilter,layout, setLayout,layoutTwo, setLayoutTwo, onOpenEdit, onOpenDelete, isOpenDelete, onDeleteUser, isOpenEdit,
  } = props;
  return (
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
              <TableCell align="left"><Typography fontFamily={row.isEdit ? 'monospace' : ''}>{row.id}</Typography> </TableCell>
              <TableCell align="left"><Typography fontFamily={row.isEdit ? 'monospace' : ''}>{row.name}</Typography></TableCell>
              <TableCell align="left"><Typography fontFamily={row.isEdit ? 'monospace' : ''}>{row.username}</Typography></TableCell>

              <TableCell align="right">
                <Link component={NavLink} to={`/user/${row.id}`}>
                  view
                </Link>
              </TableCell>

              <TableCell align="right">
                <Button
                  sx={{ mr: 2 }}
                  variant="contained"
                  onClick={() => {
                    setLayout("center");
                    onOpenEdit(row.id);
                  }}
                >
                  Edit
                </Button>
                {isOpenEdit === row.id && (
                  <ModalUsers
                    h={"Edit user"}
                    setLayout={setLayout}
                    layout={layout}
                  >
                    <FormUserEdit id={row.id} />
                  </ModalUsers>
                )}

                <Button
                  color="warning"
                  variant="contained"
                  onClick={() => {
                    setLayoutTwo("center");
                    onOpenDelete(row.id);
                  }}
                >
                  Delete
                </Button>
                {isOpenDelete === row.id.toString() + "m" && (
                  <ModalUsers
                    h={"Are you sure?"}
                    setLayout={setLayoutTwo}
                    layout={layoutTwo}
                  >
                    <Button
                      color="warning"
                      variant="contained"
                      onClick={() => onDeleteUser(row.id)}
                    >
                      Delete
                    </Button>
                  </ModalUsers>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
