import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggleChecked, onUpdate }) => {
  return (
    <ul className="w-full h-full my-4 overflow-y-auto">
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
