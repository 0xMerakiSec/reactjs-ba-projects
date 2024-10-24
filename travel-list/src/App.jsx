import PackingList from "./PackingList";
import Stats from "./Stats";
import Logo from "./Logo";
import Form from "./Form";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />

      <h1>Travel App</h1>
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onCheckItems={handleToggleItems}
        onClearList={setItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
