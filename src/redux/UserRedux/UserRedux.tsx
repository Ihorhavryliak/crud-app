import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUserType, userAPI } from "../../api/userApi";

type PageType = {previousPageId: number, nextPageId: number}

const initialState = {
  user: [] as GetUserType[],
  list: [] as GetUserType[],
  pageId: {
    previousPageId: 0,
    nextPageId: 1
  } as PageType
};

const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: (state, action) => {
      const index = state.list.findIndex(x => x.id === +action.payload);
      const previousPageId = state.list[index - 1]
      if(previousPageId){
        state.pageId.previousPageId = previousPageId.id
      }
      const nextPageId = state.list[index + 1]
      if(nextPageId){
        state.pageId.nextPageId = nextPageId.id
      }
      const find = state.list.find((f) => f.id === +action.payload);
      if (find) {
        state.user = [find] as GetUserType[];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.list = action.payload as GetUserType[];
    });
    builder.addCase(deleteUsers.fulfilled, (state, action) => {
      state.list = state.list.filter((f) => f.id !== action.payload);
    });
    builder.addCase(updateUsers.fulfilled, (state, action) => {
      const actionPayload = action.payload as GetUserType[];
      state.list = state.list.map((m) => {
        if (m.id === actionPayload[0].id) {
          return actionPayload[0];
        }
        return m;
      });
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      const actionPayload = action.payload as GetUserType;
      state.list = [...state.list, actionPayload];
    });
  },
});

export const getUsers = createAsyncThunk("getUsers", async () => {
  try {
    const response = await userAPI.getUsersDB();
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
});

export const deleteUsers = createAsyncThunk(
  "deleteUsers",
  async (id: number) => {
    try {
      const response = await userAPI.deleteUsersDB(id);
      if (response) {
        return id;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateUsers = createAsyncThunk(
  "updateUsers",
  async (userData: GetUserType) => {
    try {
      const response = await userAPI.updateUsersDB(userData);
      if (response) {
        return [userData];
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const createUser = createAsyncThunk(
  "createUser",
  async (userData: GetUserType) => {
    try {
      const response = await userAPI.createUserDB(userData);
      if (response) {
        return userData;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const { getUser } = counterSlice.actions;
export default counterSlice.reducer;
