import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggleChecked, onUpdate }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleChecked={onToggleChecked}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
};

export default Tasks;
