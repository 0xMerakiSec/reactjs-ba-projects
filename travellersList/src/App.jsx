import Form from "./Form";
import Header from "./Header";
import Status from "./Status";
import TravelList from "./TravelList";
import { useState } from "react";
function App() {
  const [addItem, setAddItem] = useState([]);
  function handleAddItem(item) {
    setAddItem((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setAddItem((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setAddItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className=" divide-y divide-slate-100">
      <Header />
      <Form handleAddItem={handleAddItem} />
      <TravelList
        itemsList={addItem}
        onDeleteItems={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={setAddItem}
      />
      <Status items={addItem} />
    </div>
  );
}

export default App;
