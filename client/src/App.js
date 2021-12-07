import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./index.css";
const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <main className="p-5">
      <h1 className="text-3xl font-medium text-center mb-6">Pern Todo App</h1>
      <AddTodo setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </main>
  );
};

export default App;
