import { useEffect } from "react";
import Todo from "./Todo";

const Todos = ({ todos, setTodos, setEdit }) => {
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
    } catch (err) {}
    setTodos(todos.filter((todo) => todo.todo_id !== id));
  };
  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((result) => {
        setTodos(result);
      });
  }, []);
  return (
    <div className="flex flex-col  items-center mt-10">
      {todos.map((todo) => {
        return (
          <Todo todo={todo} handleDelete={handleDelete} setEdit={setEdit} />
        );
      })}
    </div>
  );
};

export default Todos;
