import { useEffect, useState } from "react";
import { TodoItem, AddTodo } from "./components";
import { TodoProvider } from "./context";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((pTodos) => [
      ...pTodos,
      { id: crypto.randomUUID(), todo, complete: false },
    ]);
  };

  const updateTodo = (id, todo) => {
    setTodos((pTodos) =>
      pTodos.map((cTodo) => (cTodo.id === id ? todo : cTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((pTodos) => pTodos.filter((cTodo) => cTodo.id !== id));
  };

  const taskComplete = (id) => {
    setTodos((pTodos) =>
      pTodos.map((cTodo) =>
        cTodo.id === id ? { ...cTodo, complete: !cTodo.complete } : cTodo
      )
    );
  };
  // on the inbital mount the app fethces the data from he local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todosnew"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  // store ther new todo to the local storage
  useEffect(() => {
    localStorage.setItem("todosnew", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, taskComplete, deleteTodo }}
    >
      <div className="mx-10 my-5 w-auto">
        <div className="relative">
          <div className="bg-gradient-to-r from-pink-600 to-purple-500 absolute -inset-0.5 rounded-lg blur opacity-100 "></div>
          <div className=" relative  ">
            {/* tdod add item */}
            <AddTodo />
            {/* todo items */}
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-r from-pink-600 to-purple-500 absolute -inset-0.5 rounded-lg blur opacity-100 "></div>
          <ul className="mt-20 px-20 py-10 text-indigo-400 relative">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={` bg-gray-950 mt-4 pl-4 py-4 rounded-sm ${
                  todo.complete ? "bg-transparent" : ""
                }`}
              >
                <TodoItem todo={todo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
