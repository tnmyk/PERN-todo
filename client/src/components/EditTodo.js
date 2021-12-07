import { useState } from "react";

const EditTodo = ({ edit, setEdit, setTodos }) => {
  const [description, setDescription] = useState("");
  const handleEditSave = async () => {
    try {
      await fetch(`http://localhost:5000/todos/${edit.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          description: description,
        }),
      });
    } catch (err) {}
    setEdit(false);
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.todo_id !== edit.id) return todo;
        return {
          ...todo,
          description,
        };
      })
    );
  };
  return (
    <div className="flex gap-x-2 mt-4 items-center justify-center">
      <input
        className="p-2 w-1/4 border border-gray-400 rounded"
        placeholder="Edit task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-blue-400 p-2 rounded text-white"
        onClick={handleEditSave}
      >
        Save
      </button>
    </div>
  );
};

export default EditTodo;
