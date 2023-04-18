import {
  Button,
  Container,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

const Users = () => {
  return (
    <Container sx={{ mt: 2 }}>
      <TextField
        label="Enter text"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="outlined">Search</Button>
            </InputAdornment>
          ),
        }}
      />
      {/* table */}
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">User name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/*  {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Users;
