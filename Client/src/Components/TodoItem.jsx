import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/todoSlice";

const TodoItem = ({ todoInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 items-center ">
      <input type="checkbox" defaultChecked={todoInfo.completed} />
      <p>{todoInfo.task} </p>
      <MdDeleteForever
        className="text-red-500 text-xl cursor-pointer"
        onClick={() => {
          dispatch(deleteTodo(todoInfo._id));
        }}
      />
    </div>
  );
};

export default TodoItem;
