import { useState } from "react";
import Logo from "./logo";
import Form from "./From";
import PackingList from "./PackingList";
import Stats from "./Stats";

/*
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 2, packed: true },
  //  { id: 2, description: "", quantity: 12, packed: false },
  //{ id: 1, description: "", quantity: 2, packed: false },
  //{ id: 2, description: "", quantity: 12, packed: false },
];
*/

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    const confired = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confired) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDelete}
        onToggleItem={handleToggleItem}
        onClearlist={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
