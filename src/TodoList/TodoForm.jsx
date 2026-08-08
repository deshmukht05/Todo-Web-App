import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleSubmitValue = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmitValue}>
        <div>
          <input
            type="text"
            value={inputValue.content}
            onChange={(event) => handleInputValue(event.target.value)}
            autoComplete="off"
          />
        </div>
        <div>
          <button type="submit">Add Task</button>
        </div>
      </form>
    </section>
  );
};
