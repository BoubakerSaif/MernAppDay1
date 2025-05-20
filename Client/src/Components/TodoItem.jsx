import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../Redux/todoSlice";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";

const TodoItem = ({ todoInfo }) => {
  const [isEdited, setIsEdited] = useState(false);
  const [upTask, setUpTask] = useState(todoInfo.task);
  const { userInfo } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col  w-[250px] ml-2">
      <div className="flex items-center ">
        <img width={"40px"} src={todoInfo.createdBy.profileImage} />
        <p>
          {`${todoInfo.createdBy.firstName.toUpperCase()} ${todoInfo.createdBy.lastName.toUpperCase()}`}
        </p>
      </div>
      <div className="flex gap-2 items-center ">
        {userInfo?.id == todoInfo.createdBy._id && (
          <input type="checkbox" defaultChecked={todoInfo.completed} />
        )}

        {isEdited ? (
          <input
            onChange={(e) => {
              setUpTask(e.target.value);
            }}
            type="text"
            defaultValue={todoInfo.task}
            className="border-2 rounded-md border-cyan-500 p-1 "
          />
        ) : (
          <p>{todoInfo.task} </p>
        )}

        {userInfo?.id == todoInfo.createdBy._id && !isEdited && (
          <MdDeleteForever
            className="text-red-500 text-xl cursor-pointer"
            onClick={() => {
              dispatch(deleteTodo(todoInfo._id));
            }}
          />
        )}

        {userInfo?.id == todoInfo.createdBy._id && !isEdited && (
          <FaRegEdit
            className="text-yellow-600 text-lg cursor-pointer"
            onClick={() => {
              setIsEdited(true);
            }}
          />
        )}
        {isEdited && (
          <MdOutlineCancel
            className="text-lg cursor-pointer"
            onClick={() => {
              setIsEdited(false);
            }}
          />
        )}

        {isEdited && (
          <GiConfirmed
            className="text-green-500 text-lg cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              dispatch(updateTodo({ upTask, id: todoInfo._id }));
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TodoItem;
