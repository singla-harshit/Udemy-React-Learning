import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div className="">
      <Accordian data={faqs} />
    </div>
  );
}

function Accordian({ data }) {

  const [currOpen, setCurrOpen] = useState(2);

  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordianItem setCurrOpen={setCurrOpen} currOpen={currOpen} number={i} title={item.title} text={item.text} />
      ))}
    </div>
  );
}

function AccordianItem({ number, title, text ,setCurrOpen , currOpen}) {

  const isOpen = number === currOpen;
  function handleToggle(){
    setCurrOpen( isOpen ? null : number);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">
        {number < 10 ? `0${number + 1}` : `${number + 1}`}
      </p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? `-` : `+`}</p>
      {isOpen && <div className="context-box">{text}</div>}
    </div>
  );
}

export default App;
