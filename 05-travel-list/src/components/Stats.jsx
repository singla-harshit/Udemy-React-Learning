export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 👉</em>
      </p>
    );
  }

  const num = items.length;
  const numPacker = items.filter((item) => item.packed == true).length;
  const percent = Math.round((numPacker / num) * 100);
  return (
    <footer className="stats">
      <em>
        {percent == 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${num} items on your list , and you already packed ${numPacker} (${percent})%`}
      </em>
    </footer>
  );
}
