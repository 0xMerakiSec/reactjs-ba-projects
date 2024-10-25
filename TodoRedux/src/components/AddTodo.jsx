import { useState } from "react";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
function AddTodo() {
  const [input, setInput] = useState("");
  const id = useId();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!input) return;
    dispatch(addTodo(input));
    setInput("");
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap space-y-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={id}>Todo</Label>
        <Input
          type="text"
          id={id}
          placeholder="todo text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
}

export default AddTodo;
