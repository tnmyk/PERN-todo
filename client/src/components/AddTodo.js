import { useState } from "react";

const AddTodo = ({ setTodos }) => {
  const [description, setDescription] = useState("");
  const handleSubmit = () => {
    fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: description }),
    })
      .then((res) => res.json())
      .then((result) => {
        setTodos((todos) => [...todos, result]);
      });
    setDescription("");
  };
  return (
    <div className="flex gap-x-3 justify-center">
      <input
        type="text"
        className="p-2 w-1/3 border border-gray-600 rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-blue-400 p-2 rounded text-white"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
