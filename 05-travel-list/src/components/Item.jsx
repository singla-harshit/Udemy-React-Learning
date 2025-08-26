export default function Item({ item, handleDelete, updateToggleItem }) {
  return (
    <li>
      <label style={{ userSelect: "none" }}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => {
            updateToggleItem(item.id);
          }} />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {" "}
          {item.quantity} {item.description}
        </span>
      </label>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}
