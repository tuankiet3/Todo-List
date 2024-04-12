import React, { useEffect, useState } from "react";
// Todo.propTypes = {};

function Todo({ todo, index, onDelete }) {
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    // Kiểm tra tính chẵn lẻ của ID và đặt màu sắc tương ứng
    if (index % 2 === 0) {
      setBackgroundColor("#ffff0045");
    } else {
      setBackgroundColor("#93939345");
    }
  }, [index]);
  const handleDelete = (index) => {
    onDelete(index);
  };
  return (
    <li
      style={{ backgroundColor: backgroundColor }}
      key={index}
      id="todo-item"
      className="
        flex 
        items-center 
        px-4 
        text-black  
        w-full 
        flex-wrap
        rounded-full "
    >
      <span className="flex flex-wrap">{todo}</span>
      <button
        onClick={handleDelete}
        className="
        ml-auto
        w-[60px] 
        p-4 
        underline
        hover:text-red-500
        flex 
        items-center 
        justify-center"
      >
        Delete
      </button>
      <button
        className="
        ml-4
        w-[60px]
        p-4 
        underline
        hover:text-green-500
        flex 
        items-center 
        justify-center"
      >
        Update
      </button>
    </li>
  );
}

export default Todo;
