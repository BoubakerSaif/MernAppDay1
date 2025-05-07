import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllTodos = createAsyncThunk("todo/getAll", async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/todos");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const createTodo = createAsyncThunk("todo/createTodo", async (task) => {
  try {
    const { data } = await axios.post("http://localhost:5000/api/todos", task);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:5000/api/todos/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async ({ upTask, id }) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/todos/${id}`,
        { task: upTask }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.allTodos = action.payload;
    });
    builder.addCase(getAllTodos.rejected, (state) => {
      state.loading = false;
    });
    ////////////////////////////////////////////////////////
    builder.addCase(createTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.newTodo = action.payload;
    });
    builder.addCase(createTodo.rejected, (state) => {
      state.loading = false;
    });
    ///////////////////////////////////////////////////////
    builder.addCase(deleteTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.deletedTodo = action.payload;
    });
    builder.addCase(deleteTodo.rejected, (state) => {
      state.loading = false;
    });
    /////////////////////////////////////////////////////////////
    builder.addCase(updateTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.updatedTodo = action.payload;
    });
    builder.addCase(updateTodo.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default todoSlice.reducer;
