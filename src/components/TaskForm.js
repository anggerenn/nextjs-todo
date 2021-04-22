import { useEffect, useRef, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { Calendar } from "react-feather";

const TaskForm = ({ onSubmitTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState(formatDate());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const textRef = useRef();

  useEffect(() => {
    textRef.current.focus();
  }, []);

  const handleClickCalendar = () => {
    setShowDatePicker(!showDatePicker);
  };

  const submitTask = (event) => {
    event.preventDefault();

    if (!text) {
      return;
    }

    onSubmitTask({
      id: Math.floor(Math.random() * 1000 + 1),
      text,
      day,
      checked: false,
    });

    setText("");
    setDay(formatDate());
  };

  return (
    <form onSubmit={submitTask}>
      <input
        type="text"
        onChange={(event) => setText(event.target.value)}
        value={text}
        ref={textRef}
        placeholder="Add Task"
      />
      {!showDatePicker ? (
        <Calendar onClick={handleClickCalendar} />
      ) : (
        <>
          <Calendar onClick={handleClickCalendar} />
          <div>
            <input
              type="date"
              onChange={(event) => setDay(event.target.value)}
              value={day}
              placeholder="Add Date"
            />
          </div>
        </>
      )}
    </form>
  );
};

export default TaskForm;
