const Todo = ({ todo, handleDelete, setEdit }) => {
  return (
    <div className="bg-gray-200 p-3 rounded mb-3 w-2/4 flex justify-between">
      <span>{todo.description}</span>
      <div>
        <button
          className="bg-blue-500 text-white rounded p-1 mr-3"
          onClick={() => {
            setEdit({ editing: true, id: todo.todo_id });
          }}
        >
          Edit
        </button>
        <button
          className="bg-blue-500 text-white rounded p-1"
          onClick={() => {
            handleDelete(todo.todo_id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
