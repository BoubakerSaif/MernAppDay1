import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { clearCredentials, setCredentials } from "./authSlice";

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

export const signIn = createAsyncThunk(
  "user/signin",
  async ({ user, navigate, toast }, { dispatch }) => {
    axios.defaults.withCredentials = true;
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/auth",
        user
      );
      dispatch(setCredentials(data));
      if (data) {
        navigate("/");
        toast.success("User loggedIn Successfully");
      }
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async ({ navigate, toast }, { dispatch }) => {
    axios.defaults.withCredentials = true;
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/logout"
      );
      dispatch(clearCredentials());
      if (data) {
        navigate("/");
        toast.success("User loggedOut");
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async ({ user, navigate, toast }, { dispatch }) => {
    axios.defaults.withCredentials = true;
    try {
      const { data } = await axios.put("http://localhost:5000/api/users", user);
      if (data) {
        dispatch(clearCredentials());
        toast.success("Profile Updated");
        navigate("/");
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
      state.loading = false;
      state.createdUser = action.payload;
    });
    builder.addCase(signUp.rejected, (state) => {
      state.loading = false;
    });
    /////////////////////////////////////////////////////////////////////////
    builder.addCase(signIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedInUser = action.payload;
    });
    builder.addCase(signIn.rejected, (state) => {
      state.loading = false;
    });
    /////////////////////////////////////////////////////////////

    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.updatedUser = action.payload;
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
