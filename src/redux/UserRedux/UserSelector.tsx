import { RootState } from "../store";

export const getUsersSelector= (state: RootState) => {
  return state.users.list;
};

export const getUserSelector= (state: RootState) => {
  return state.users.user;
};
