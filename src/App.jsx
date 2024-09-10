import React, { useState } from "react";

const App = () => {
  const [show, setShow] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [newTech, setNewTech] = useState("");
  const [records, setRecords] = useState([
    "Child 1",
    "Child 2",
    "Child 3",
    "Child 4",
  ]);
  const [count, setCount] = useState(0);

  const items = [
    "paperclip",
"red balloon",
 "coffee mug",
 "sandcastle",
 "spinning top",
"neon sign",
"sunflower",
 "deck of cards",
 "skateboard",
 "rubber duck",
"lava lamp",
 "vintage radio",
 "magnifying glass",
 "seashell",
 "snow globe",
 "chessboard",
 "rainbow-colored umbrella",
 "fortune cookie",
 "jar of marbles",
 "feather quill",
 "hammock",
 "treasure map",
 "vinyl record",
 "cat-shaped pillow",
 "typewriter",
 "comic book",
 "crystal ball",
 "pirate hat",
 "bonsai tree",
 "kaleidoscope",
  ];
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const sum = () => {
    return parseFloat(number1 || 0) + parseFloat(number2 || 0);
  };

  const addTech = () => {
    if (newTech.trim()) {
      setRecords([...records, newTech]);
      setNewTech("");
    }
  };

  return (
    <div className="flex justify-center">
      {/*  ----------- task 1 -------------------- */}
      <div className="flex flex-col items-center">
        <ul className="flex flex-col w-full list-unstyled p-3">
          <li className="p-2">
            <h3 >Displaying Simple JSX</h3>
            <p >This is a simple JSX paragraph.</p>
          </li>

          <li className="p-2">
            <h3>
              Displaying an Array of Records
            </h3>
            <ul className="list-none">
              {records.map((record, index) => (
                <li key={index}>
                  {record}
                </li>
              ))}
            </ul>
          </li>

          <li className="p-2">
            <h3>Toggle Element on Screen</h3>
            <p>{show ? "Hello, I am visible!" : ""}</p>
            <button
              className="btn btn-primary"
              onClick={() => setShow(!show)}
            >
              {show?"Hide":"Show"}
            </button>
          </li>

          <li className="p-2">
            <h3>Enable or Disable a Button</h3>
            <button
              className="mx-2 btn btn-primary"
              onClick={() => setDisabled(!disabled)}
            >
              {disabled?"Enable":"Disable"}
            </button>
            <button className='ml-4 btn btn-primary' disabled={disabled}>
              Click Me
            </button>
          </li>

          <li className="p-2">
            <h3>
              Enter two numbers
            </h3>
            <input
              className="w-full p-2 mt-2 mx-2"
              type="number"
              value={number1}
              onChange={(e) => setNumber1(e.target.value)}
              placeholder="Enter number 1"
            />
            <input
              className="w-full p-2 mt-2"
              type="number"
              value={number2}
              onChange={(e) => setNumber2(e.target.value)}
              placeholder="Enter number 2"
            />
          </li>

          <li className="p-2 ">
            <h3>Sum of Given Two Numbers</h3>
            <p>Sum: {sum()}</p>
          </li>

          <li className="p-2">
            <h3>
              Dynamically Add Child Components
            </h3>
            <ul className="list-none">
              {records.map((record, index) => (
                <li key={index}>
                  {record}
                </li>
              ))}
            </ul>
            <input
              className="w-full p-2 mt-2"
              type="text"
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              placeholder="Enter child name"
            />
            <button
              className="mx-2 btn btn-primary"
              onClick={addTech}
            >
              Add Child
            </button>
          </li>
        </ul>
      </div>
      {/* -------------- task 2 ------------------ */}
      <div className=" p-3">
        <h3 className="p-2">
          COUNTER: {count}
        </h3>
        <div className="flex gap-4 ">
          <button
            className=" btn btn-primary mx-2 "
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </button>
          <button
            className=" btn btn-primary mx-2"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>
        </div>
      </div>

{/* -------------- task 3 ------------------ */}
<div style={{padding:2+'em'}}>
  <h3>Enter to filter :</h3>
        <input
        style={{minWidth:100+'%'}}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="type here"
          className="p-2"
        />
        <ul className="mt-3 list-unstyled ">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className="p-2 mt-2 border"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>


  );
};

export default App;
