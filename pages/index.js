import { useState } from "react";
import Tasks from "../src/components/Tasks";
import TaskForm from "../src/components/TaskForm";
import { formatDate } from "../utils/formatDate";

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: formatDate(),
      checked: true,
    },
    {
      id: 2,
      text: "Meetup",
      day: formatDate(),
      checked: true,
    },
    {
      id: 3,
      text: "Wash a Car",
      day: formatDate(),
      checked: true,
    },
    {
      id: 4,
      text: "Cook dinner",
      day: formatDate(),
      checked: false,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Update Task
  const updateTask = (id, newValue) => {
    setTasks(tasks.map((task) => (task.id === id ? newValue : task)));
  };

  // Toggle Reminder
  const toggleChecked = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <>
      <h1 className="text-xl text-center">
        Next JS <span className="font-semibold">Todo</span>
      </h1>
      <div className="flex flex-col h-full overflow-hidden">
        <TaskForm onSubmitTask={addTask} />
        {tasks.length >= 1 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggleChecked={toggleChecked}
            onUpdate={updateTask}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
