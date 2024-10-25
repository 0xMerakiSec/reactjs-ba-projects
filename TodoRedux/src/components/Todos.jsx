import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../store/todoSlice";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
function Todos() {
  const todos = useSelector((state) => state.todos); //retrieving the todos
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [todoMessage, setTodoMessage] = useState("");
  return (
    <div className="w-full h-full shadow-sm rounded-sm flex flex-wrap flex-grow items-stretch">
      <ul className="flex flex-wrap  p-3 flex-grow items-stretch  ">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-slate-200 flex-wrap flex justify-between  items-baseline p-3 w-full rounded-md flex-grow   mt-2"
          >
            {isEditable ? (
              <Input
                type="text"
                id={todo.id}
                placeholder="todo text"
                value={todo.todoText}
                onChange={(e) => setTodoMessage(e.target.value)}
              />
            ) : (
              <p className="flex-shrink-0">{todo.todoText} </p>
            )}
            <div className="ml-2 flex space-x-1 ">
              {!isEditable ? (
                <Button onClick={() => setIsEditable(true)}>Edit</Button>
              ) : (
                <Button
                  onClick={() => {
                    setIsEditable(false);
                    dispatch(
                      editTodo({
                        id: todo.id,
                        todoText: todoMessage,
                        complete: false,
                      })
                    );
                  }}
                >
                  Save
                </Button>
              )}
              <Button onClick={() => dispatch(deleteTodo(todo.id))}>
                delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
