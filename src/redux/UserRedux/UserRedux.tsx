import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUserType, userAPI } from "../../api/userApi";

const initialState = {
  user: [] as GetUserType[],
  list: [] as GetUserType[],
};

const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: (state, action) => {
      const find = state.list.find((f) => f.id === +action.payload);
      if (find) {
        state.user = [find] as GetUserType[];
      }
    },
    createUser: (state, action) => {
      state.list = [...state.list, action.payload[0]];
    },
    deleteUser: (state, action) => {
      state.list = state.list.filter((f) => f.id !== action.payload);
    },
    updateUser: (state, action) => {
      console.log(action.payload[0].id);
      state.list = state.list.map((m) => {
        if (m.id === action.payload[0].id) {
          return action.payload[0];
        }
        return m;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const getUsers = createAsyncThunk("getUsers", async () => {
  const response = await userAPI.getUsers();
  return response;
});

export const { getUser, deleteUser, createUser, updateUser } =
  counterSlice.actions;
export default counterSlice.reducer;
