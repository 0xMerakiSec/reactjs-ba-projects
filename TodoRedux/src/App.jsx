import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className=" w-[40%] h-full">
      <div className=" flex  p-3 min-h-[50%] shadow-2xl rounded-md w-[100%] flex-col bg-slate-100 space-y-10">
        <h1 className="font-light text-center text-2xl">
          Todo Task using Redux
        </h1>
        <div className="self-center">
          <AddTodo />
        </div>
        <div className="flex-1 self-center">
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
