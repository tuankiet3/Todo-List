import React, { useState, useEffect } from "react";
import TodoList from "./Components/TodoList";
// TodoFeature.propTypes = {

// };

function TodoFeature(props) {
  const intiTodoList = [];
  const [tasks, setTasks] = useState(intiTodoList);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  function HandleAddTodo() {
    const input = document.getElementById("input");
    if (!input.value) {
      alert("vui lòng nhập công việc");
      return;
    }
    const task = input.value;
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks, task];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
    input.value = "";
    input.focus();
    input.focus();
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 1000);
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      HandleAddTodo();
    }
  };
  const handleDelete = (index) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("bạn muốn xoá công việc này?")) {
      const updatedTodoList = [...tasks];
      updatedTodoList.splice(index, 1);
      setTasks(updatedTodoList);
      localStorage.setItem("tasks", JSON.stringify(updatedTodoList));
    }
  };
  return (
    <div
      className="
        flex 
        flex-col 
        items-center 
        justify-center
        absolute
        h-screen
        w-screen
        box-border"
    >
      {showSuccessMessage && (
        <div className="bg-green-500 rounded-full p-3 relative top-[-50px] z-10">
          <div className="modal-content">
            <p>Công việc đã được thêm thành công!</p>
          </div>
        </div>
      )}
      <div
        className="
        flex 
        items-center
        justify-center
        gap-5 
        w-[600px]"
      >
        <input
          id="input"
          type="text"
          className="
            border-solid 
            border-black 
            border-2 
            rounded-full 
            p-4 
            w-full
            ml-7"
          placeholder="Enter todo"
          onKeyDown={handleKeyDown}
        ></input>
        <button
          onClick={HandleAddTodo}
          id="btnAdd"
          type="submit"
          className="
            rounded-full
            p-4
            hover:bg-green-500
            bg-slate-300
            mr-5
            "
        >
          Add
        </button>
      </div>
      <div className="max-h-[400px] overflow-auto">
        <TodoList todoList={tasks} onDelete={handleDelete}></TodoList>
      </div>
    </div>
  );
}

export default TodoFeature;
