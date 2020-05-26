import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { setState } from "./redux/action";
import update from "immutability-helper";
import { useSelector } from "react-redux";
import { AppState } from "./redux/store";

const addTodo = (name: string) =>
  setState((state) =>
    update(state, {
      list: {
        $push: [
          {
            name,
          },
        ],
      },
    })
  );

function App() {
  const [name, setName] = useState("");

  const handleButtonClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(name);
    setName("");
  };

  const todos = useSelector((state: AppState) => state.list);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleButtonClick}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        {todos.map((todo, i) => (
          <div key={i}>{todo.name}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
