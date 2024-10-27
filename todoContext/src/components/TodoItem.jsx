import { useTodo } from "@/context";
import { Button } from "@/components/ui/button";
import { useState } from "react";
function TodoItem({ todo }) {
  const { deleteTodo, upateTodo, taskComplete } = useTodo();
  const [isEditable, setIsEditable] = useState(false);
  const [msg, setMsg] = useState(todo.todo);
  function handleTaskComplete() {
    taskComplete(todo.id);
    setIsEditable(false);
  }
  function handleDelete() {
    deleteTodo(todo.id);
  }
  function handleEdit() {
    setIsEditable(!isEditable);
  }
  function handleUpdate() {
    setIsEditable(!isEditable);
    upateTodo(todo.id, { ...todo, todo: msg });
  }

  return (
    <div className="flex flex-wrap items-center justify-between content-center">
      <input
        type="checkbox"
        id={todo.id}
        checked={todo.complete}
        onChange={handleTaskComplete}
      />
      <div className="flex-1 ml-4 ">
        <input
          className="bg-transparent outline-none flex-shrink-0 w-full"
          type="text"
          readOnly={!isEditable}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
      </div>
      <div className=" mr-8 flex space-x-3">
        <Button onClick={handleDelete} className="bg-red-6700 hover:bg-red-600">
          Delete
        </Button>
        {!todo.complete && (
          <div>
            {!isEditable ? (
              <Button onClick={handleEdit}>Edit</Button>
            ) : (
              <Button onClick={handleUpdate}>Save</Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
