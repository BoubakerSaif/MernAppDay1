import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../Redux/todoSlice";
import { useNavigate } from "react-router-dom";
const AddTodo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const { userInfo } = useSelector((state) => state.AuthReducer);
  return (
    <div className="mt-2 flex gap-2">
      <input
        name="task"
        value={text}
        type="text"
        className=" border-2 rounded-md border-yellow-500 "
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          userInfo
            ? (dispatch(createTodo({ task: text })), setText(""))
            : navigate("/signin");
        }}
        className="bg-green-500 py-1 px-2 rounded-md cursor-pointer hover:scale-105 duration-200"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
