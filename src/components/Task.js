import { useState } from "react";
import { Edit, Trash2 } from "react-feather";
import TaskForm from "./TaskForm";

const Task = ({ task, onDelete, onToggleChecked, onUpdate }) => {
  const [prev, setPrev] = useState({
    text: task.text,
    day: task.day,
    checked: task.checked,
  });

  const [inEdit, setInEdit] = useState(false);

  const handleClickEdit = () => {
    setInEdit(!inEdit);
    setPrev({ id: task.id, checked: task.checked });
  };

  const submitUpdatedTask = (value) => {
    const currentValue = { ...value, id: prev.id, checked: prev.checked };

    onUpdate(prev.id, currentValue);

    setPrev({
      text: "",
      day: "",
    });

    setInEdit(false);
  };

  return (
    <>
      {inEdit ? (
        <li className="flex flex-row my-1 item-center">
          <TaskForm prev={prev} onSubmitTask={submitUpdatedTask} />
          <div className="flex items-center">
            <Edit
              className="w-4 h-4 cursor-pointer"
              onClick={handleClickEdit}
            />
          </div>
        </li>
      ) : (
        <>
          <li className="flex flex-col mb-1 border-2 rounded">
            <p
              className={`${task.checked ? "line-through" : ""}`}
              onDoubleClick={() => onToggleChecked(task.id)}
            >
              {task.text}
            </p>

            <div className="flex flex-row justify-between">
              <small>{task.day}</small>
              <div className="flex flex-row items-center">
                <Edit
                  className="w-4 h-4 cursor-pointer"
                  onClick={handleClickEdit}
                />
                <Trash2
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => onDelete(task.id)}
                />
              </div>
            </div>
          </li>
        </>
      )}
    </>
  );
};

export default Task;
