import React from "react";
import Todo from "../Todo";

// index.propTypes = {

// };

function TodoList({ todoList, onDelete }) {
  return (
    <div className="w-[600px]">
      <ul className="mt-4 flex flex-col gap-3 items-center mx-5">
        {todoList.map((todo, index) => (
          <Todo todo={todo} index={index} onDelete={onDelete}></Todo>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
