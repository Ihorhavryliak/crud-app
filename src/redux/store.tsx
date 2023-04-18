import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import users from "./UserRedux/UserRedux";

 const store = configureStore({
  reducer: {
    users,
  },

});
export default store
export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
