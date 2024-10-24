import { useState } from "react";

const tasklist = [
  {
    name: "Meeting",
    description: "Meeting about the task project on todo",
    completed: false,
    id: crypto.randomUUID(),
  },
  {
    name: "Yoga",
    description: "Basic flexibility training for the body strengthening",
    completed: false,
    id: crypto.randomUUID(),
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-300 flex justify-center items-center content-baseline text-white ">
      <Todo />
    </div>
  );
}
function Button({ onClick, children, addStyle }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-600 px-8 py-3 rounded-md text-center shadow-xl hover:bg-green-500 text-2xl font-bold"
      style={addStyle}
    >
      {children}
    </button>
  );
}
function Todo() {
  const [addTask, setAddTask] = useState(tasklist);
  const [showForm, setShowForm] = useState(false);
  function handleShowForm() {
    setShowForm((show) => !show);
  }
  function handleAddTask(task) {
    setAddTask((tasks) => [...tasks, task]);
    setShowForm(false);
  }
  return (
    <div className="flex flex-col justify-between mx-auto my-10 min-w-200 max-w-full ">
      {showForm && <TodoForm onAddTask={handleAddTask} />}
      <button
        onClick={handleShowForm}
        className="bg-black rounded-full w-9 h-9 shadow-md hover:bg-gray-900 self-end mt-3"
      >
        {showForm ? "➖" : "➕"}
      </button>
      <TaskList tasklist={addTask} onDelete={setAddTask} />
    </div>
  );
}

function TodoForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description) return;
    const id = crypto.randomUUID();
    const newTask = {
      name: title,
      description,
      completed: false,
      id,
    };
    onAddTask(newTask);
  }

  return (
    <div className="w-240 bg-slate-200 px-5 py-8 rounded-md shadow-lg ">
      <form
        className="flex flex-col justify-between text-left font-semibold text-gray-800 items-baseline space-y-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title">Title</label>
        <input
          className="px-2 py-3 rounded focus:ring-1 focus:outline-none focus:ring-cyan-500"
          type="text"
          placeholder="title"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="task-description">Task Description</label>
        <input
          className="px-2 py-3 rounded focus:ring-1 focus:outline-none focus:ring-cyan-500"
          type="text"
          placeholder="description"
          name="task-description"
          id="task-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </div>
  );
}
function TaskList({ tasklist, onDelete }) {
  return (
    <ul className="flex flex-col space-y-4 max-h-screen">
      {tasklist.map((task) => (
        <Task task={task} key={task.id} tasks={onDelete} />
      ))}
    </ul>
  );
}
function Task({ task, tasks }) {
  const [completeTask, setCompleteTask] = useState(false);
  function handleDelete() {
    tasks((ptasks) => ptasks.filter((ptask) => ptask.id !== task.id));
  }
  return (
    <>
      <div
        className=" w-80 bg-slate-400 px-4 py-2 mt-4 shadow-md"
        style={{ backgroundColor: completeTask ? "green" : "" }}
      >
        <h2 className="font-bold text-center text-3xl text-black">
          {task.name}
        </h2>

        <p className="text-wrap text-xl  p-2 mb-4">{task.description}</p>
        <p className="font-light mb-2">
          {completeTask &&
            "This task is completed, You can delete this to free up some space."}
        </p>
        <div className="flex justify-around content-baseline">
          <input
            className="w-8 rounded-sm "
            type="checkbox"
            name="completed"
            id="completed"
            value={completeTask}
            onChange={() => setCompleteTask((c) => !c)}
          />
          <Button
            onClick={handleDelete}
            addStyle={{ backgroundColor: completeTask ? "red" : "" }}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}
