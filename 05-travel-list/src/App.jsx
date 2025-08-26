import "./App.css";
import { useState } from "react";
import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Logo from "./components/Logo";
import Stats from "./components/Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 4, packed: false },
//   { id: 3, description: "Pink", quantity: 1, packed: true },
//   { id: 4, description: "Shirts", quantity: 3, packed: false },
//   { id: 5, description: "Shoes", quantity: 2, packed: true },
//   { id: 6, description: "Trousers", quantity: 2, packed: false },
//   { id: 7, description: "Jackets", quantity: 1, packed: false },
//   { id: 8, description: "Laptop", quantity: 1, packed: true },
//   { id: 9, description: "Charger", quantity: 2, packed: true },
//   { id: 10, description: "Toothbrush", quantity: 1, packed: false },
//   { id: 11, description: "Toothpaste", quantity: 1, packed: false },
//   { id: 12, description: "Towel", quantity: 2, packed: true },
//   { id: 13, description: "Water Bottle", quantity: 1, packed: false },
//   { id: 14, description: "Snacks", quantity: 5, packed: false },
//   { id: 15, description: "Sunglasses", quantity: 1, packed: true },
//   { id: 16, description: "Hat", quantity: 1, packed: false },
//   { id: 17, description: "Camera", quantity: 1, packed: true },
//   { id: 18, description: "Books", quantity: 3, packed: false },
//   { id: 19, description: "Notebook", quantity: 2, packed: false },
//   { id: 20, description: "Pen", quantity: 5, packed: true },
//   { id: 21, description: "Power Bank", quantity: 1, packed: false },
//   { id: 22, description: "Headphones", quantity: 1, packed: true },
//   { id: 23, description: "Tablet", quantity: 1, packed: false },
//   { id: 24, description: "Guidebook", quantity: 1, packed: false },
//   { id: 25, description: "Map", quantity: 1, packed: true },
//   { id: 26, description: "Wallet", quantity: 1, packed: true },
//   { id: 27, description: "Credit Card", quantity: 2, packed: true },
//   { id: 28, description: "Keys", quantity: 1, packed: false },
//   { id: 29, description: "Umbrella", quantity: 1, packed: false },
//   { id: 30, description: "Raincoat", quantity: 1, packed: false },
//   { id: 31, description: "Gloves", quantity: 2, packed: false },
//   { id: 32, description: "Scarf", quantity: 1, packed: true },
//   { id: 33, description: "Swimsuit", quantity: 1, packed: false },
//   { id: 34, description: "Flip Flops", quantity: 1, packed: true },
//   { id: 35, description: "Medicine", quantity: 3, packed: true },
//   { id: 36, description: "Bandages", quantity: 1, packed: false },
//   { id: 37, description: "First Aid Kit", quantity: 1, packed: false },
//   { id: 38, description: "Hand Sanitizer", quantity: 1, packed: true },
//   { id: 39, description: "Soap", quantity: 2, packed: false },
//   { id: 40, description: "Shampoo", quantity: 1, packed: false },
//   { id: 41, description: "Conditioner", quantity: 1, packed: false },
//   { id: 42, description: "Deodorant", quantity: 1, packed: true },
//   { id: 43, description: "Perfume", quantity: 1, packed: true },
//   { id: 44, description: "Lotion", quantity: 1, packed: false },
//   { id: 45, description: "Moisturizer", quantity: 1, packed: false },
//   { id: 46, description: "Shaving Kit", quantity: 1, packed: false },
//   { id: 47, description: "Razor", quantity: 2, packed: true },
//   { id: 48, description: "Nail Cutter", quantity: 1, packed: true },
//   { id: 49, description: "Comb", quantity: 1, packed: false },
//   { id: 50, description: "Hair Dryer", quantity: 1, packed: false },
//   { id: 51, description: "Makeup Kit", quantity: 1, packed: false },
//   { id: 52, description: "Lip Balm", quantity: 1, packed: true },
//   { id: 53, description: "Face Mask", quantity: 5, packed: true },
//   { id: 54, description: "Earplugs", quantity: 2, packed: false },
//   { id: 55, description: "Travel Pillow", quantity: 1, packed: false },
//   { id: 56, description: "Blanket", quantity: 1, packed: false },
//   { id: 57, description: "Sleep Mask", quantity: 1, packed: true },
//   { id: 58, description: "Torch", quantity: 1, packed: true },
//   { id: 59, description: "Batteries", quantity: 4, packed: false },
//   { id: 60, description: "Notebook Charger", quantity: 1, packed: false },
//   { id: 61, description: "Adapter", quantity: 1, packed: true },
//   { id: 62, description: "Extension Cord", quantity: 1, packed: false },
//   { id: 63, description: "USB Cable", quantity: 2, packed: true },
//   { id: 64, description: "Memory Card", quantity: 2, packed: true },
//   { id: 65, description: "Hard Drive", quantity: 1, packed: false },
//   { id: 66, description: "Mouse", quantity: 1, packed: false },
//   { id: 67, description: "Keyboard", quantity: 1, packed: false },
//   { id: 68, description: "Notebook Stand", quantity: 1, packed: false },
//   { id: 69, description: "Tripod", quantity: 1, packed: true },
//   { id: 70, description: "Binoculars", quantity: 1, packed: false },
//   { id: 71, description: "Compass", quantity: 1, packed: true },
//   { id: 72, description: "Tent", quantity: 1, packed: false },
//   { id: 73, description: "Sleeping Bag", quantity: 1, packed: true },
//   { id: 74, description: "Cooking Set", quantity: 1, packed: false },
//   { id: 75, description: "Portable Stove", quantity: 1, packed: false },
//   { id: 76, description: "Lighter", quantity: 2, packed: true },
//   { id: 77, description: "Matches", quantity: 1, packed: false },
//   { id: 78, description: "Camping Chair", quantity: 2, packed: false },
//   { id: 79, description: "Hiking Boots", quantity: 1, packed: true },
//   { id: 80, description: "Climbing Rope", quantity: 1, packed: false },
//   { id: 81, description: "Carabiners", quantity: 4, packed: true },
//   { id: 82, description: "Helmet", quantity: 1, packed: false },
//   { id: 83, description: "Life Jacket", quantity: 1, packed: false },
//   { id: 84, description: "Fishing Rod", quantity: 1, packed: false },
//   { id: 85, description: "Bait", quantity: 2, packed: false },
//   { id: 86, description: "Cooler Box", quantity: 1, packed: true },
//   { id: 87, description: "Ice Packs", quantity: 3, packed: true },
//   { id: 88, description: "Picnic Basket", quantity: 1, packed: false },
//   { id: 89, description: "Fruits", quantity: 5, packed: false },
//   { id: 90, description: "Vegetables", quantity: 4, packed: false },
//   { id: 91, description: "Bread", quantity: 2, packed: true },
//   { id: 92, description: "Cheese", quantity: 2, packed: true },
//   { id: 93, description: "Butter", quantity: 1, packed: false },
//   { id: 94, description: "Milk", quantity: 1, packed: false },
//   { id: 95, description: "Eggs", quantity: 12, packed: false },
//   { id: 96, description: "Meat", quantity: 2, packed: true },
//   { id: 97, description: "Juice", quantity: 2, packed: false },
//   { id: 98, description: "Soda", quantity: 4, packed: false },
//   { id: 99, description: "Beer", quantity: 6, packed: true },
//   { id: 100, description: "Wine", quantity: 2, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);

  function clearList(){
    const confirmed = window.confirm("Are you sure you want to clear all the list!");
    if(confirmed)
    setItems([]);
  }

  function addItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function updateToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form addItems={addItems} />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        updateToggleItem={updateToggleItem}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
