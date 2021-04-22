import { useRef, useState } from "react";
import { X, Edit } from "react-feather";
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

  if (inEdit) {
    const escapeBrother = (event) => {
      console.log(event.code);
    };

    return (
      <li>
        <TaskForm prev={prev} onSubmitTask={submitUpdatedTask} />
        <Edit style={{ cursor: "pointer" }} onClick={handleClickEdit} />
      </li>
    );
  }

  return (
    <>
      <li
        style={{ textDecoration: task.checked ? "line-through" : "" }}
        onDoubleClick={() => onToggleChecked(task.id)}
      >
        {task.text}
        <X style={{ cursor: "pointer" }} onClick={() => onDelete(task.id)} />
        <Edit style={{ cursor: "pointer" }} onClick={handleClickEdit} />
      </li>
    </>
  );
};

export default Task;
