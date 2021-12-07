const Todo = ({ todo, handleDelete }) => {
  return (
    <div className="bg-gray-200 p-3 rounded mb-3 w-2/4 flex justify-between">
      <span>{todo.description}</span>
      <button
        className="bg-blue-500 text-white rounded p-1"
        onClick={() => {
          handleDelete(todo.todo_id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
