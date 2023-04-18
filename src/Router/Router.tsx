import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Users from "../views/Users";
import User from "../views/User";

const Routers = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="user/:id" element={<User />} />
      </Route>
    </Routes>
  );
};

export default Routers;
