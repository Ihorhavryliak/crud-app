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
      if(find){
        state.user = [find] as GetUserType[] 
      }
    },
    createUser: (state, action) => {
      state.list = [...state.list, action.payload[0]];
    },
    deleteUser: (state, action) => {
      state.list = state.list.filter((f) => f.id !== action.payload);
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



export const { getUser, deleteUser, createUser } = counterSlice.actions;
export default counterSlice.reducer;
