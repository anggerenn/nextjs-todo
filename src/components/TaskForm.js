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

  const submitTask = (event) => {
    event.preventDefault();

    if (!text) {
      return;
    }

    onSubmitTask({
      id: new Date().getTime(),
      text,
      day,
      checked: false,
    });

    setText("");
    setDay(formatDate());
  };

  return (
    <form
      className="relative flex flex-row items-center mx-auto my-2"
      onSubmit={submitTask}
    >
      <input
        type="text"
        className="w-64 pr-6 truncate"
        onChange={(event) => setText(event.target.value)}
        // onClick={() => setShowDatePicker(false)}
        onFocus={() => setShowDatePicker(false)}
        value={text}
        ref={textRef}
        placeholder="Add Task"
      />
      {!showDatePicker ? (
        <div className="absolute top-50% right-0 p-1">
          <Calendar
            className="w-4 h-4 cursor-pointer"
            onClick={() => setShowDatePicker(!showDatePicker)}
          />
        </div>
      ) : (
        <div className="absolute top-50% right-0 p-1">
          <Calendar
            className="relative w-4 h-4 cursor-pointer"
            onClick={() => setShowDatePicker(!showDatePicker)}
          />
          <input
            className="absolute w-24 -inset-x-full top-6 input-calendar-picker"
            type="date"
            onChange={(event) => setDay(event.target.value)}
            value={day}
            placeholder="Add Date"
          />
        </div>
      )}
    </form>
  );
};

export default TaskForm;
