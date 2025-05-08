import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk(
  "user/signup",
  async ({ user, navigate, toast }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users",
        user
      );
      if (data) {
        navigate("/");
        toast.success("User Created Successfully");
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.laoding = false;
      state.createdUser = action.payload;
    });
    builder.addCase(signUp.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
