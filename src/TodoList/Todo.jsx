import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageData, setLocalStorageData } from "./TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageData());

  const handleSubmitValue = (inputValue) => {
    const { id, content, checked } = inputValue;

    // to check if the input feild is empty or not
    if (!content) return;

    // To check if data already exists or not
    // if (task.includes(inputValue)) return;
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  // Delete function
  const handleDeleteTodo = (value) => {
    const updateList = task.filter((curElem) => curElem.content !== value);
    setTask(updateList);
  };

  // Clear Function
  const handleClearTodo = () => {
    setTask([]);
  };

  // onHandleCheckedTodo functionality
  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else return curTask;
    });
    setTask(updatedTask);
  };

  setLocalStorageData(task);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleSubmitValue} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curElem) => {
            return (
              <TodoList
                key={curElem.id}
                data={curElem.content}
                checked={curElem.checked}
                onHandleDelete={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodo}>
          Clear all
        </button>
      </section>
    </section>
  );
};
