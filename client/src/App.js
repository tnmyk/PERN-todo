import { useState } from "react";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import Todos from "./components/Todos";
import "./index.css";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({ editing: false });

  return (
    <main className="p-5">
      <h1 className="text-3xl font-medium text-center mb-6">Pern Todo App</h1>
      <AddTodo setTodos={setTodos} />
      {edit.editing && (
        <EditTodo edit={edit} setEdit={setEdit} setTodos={setTodos} />
      )}
      <Todos todos={todos} setTodos={setTodos} setEdit={setEdit} />
    </main>
  );
};

export default App;
