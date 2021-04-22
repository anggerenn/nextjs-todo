import { useState } from "react";
import Tasks from "../src/components/Tasks";
import TaskForm from "../src/components/TaskForm";

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      checked: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      checked: true,
    },
    {
      id: 3,
      text: "Wash a Car",
      day: "Feb 8th at 1:30pm",
      checked: true,
    },
    {
      id: 4,
      text: "Candle light dinner",
      day: "Feb 12th at 1:30pm",
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
    <div>
      <h1>Next JS Todo</h1>
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
  );
}
