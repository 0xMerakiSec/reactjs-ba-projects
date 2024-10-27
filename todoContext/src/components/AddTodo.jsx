import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTodo } from "@/context";

function AddTodo() {
  const { addTodo } = useTodo();
  const [todoMessage, setTodoMessage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!todoMessage) return;
    addTodo(todoMessage);
    setTodoMessage("");
  }
  return (
    <form
      className="text-indigo-400 w-[50%] flex gap-2 mx-auto "
      onSubmit={handleSubmit}
    >
      <Input
        className=""
        placeholder="write todo..."
        value={todoMessage}
        onChange={(e) => setTodoMessage(e.target.value)}
      />
      <Button type={"submit"}>Add Todo</Button>
    </form>
  );
}

export default AddTodo;
