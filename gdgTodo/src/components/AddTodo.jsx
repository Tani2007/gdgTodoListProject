import { useEffect, useState } from "react";
import { TodoList } from "./TodoList";
import { Completed } from "./Completed";
import { Active } from "./Active";
import { FilterButton } from "./FilterButton";

export function AddTodo() {
  const [activeState, setActiveState] = useState("All");
  const [input, setInputState] = useState("");
  const [list, setList] = useState([]);
  const [idCount, setIdCount] = useState(1);

  //set input
  function setInput(e) {
    setInputState(e.target.value);
  }

  //handle Add Click
  function handleClick() {
    if (input.trim() === "") {
      alert("Please enter a valid todo");
      return;
    }
    let existingTodo = list.find((item) => {
      return item.title.toLowerCase() == input.toLowerCase();
    });
    if (existingTodo) {
      alert("Todo already exists");
      return;
    }
    setList((prev) => {
      const newTodo = {
        id: idCount,
        title: input,
        completed: false,
      };
      return [...prev, newTodo];
    });
    setIdCount((prev) => prev + 1);
    setInputState("");
  }
  console.log(list);
  return (
    <div className="mt-8 p-3 rounded-2xl shadow-lg App-component">
      <input
        className="overflow-hidden focus:outline-none border-2 border-black rounded-l-2xl p-2"
        type="text"
        value={input}
        onChange={setInput}
        placeholder="Add a new todo"
      />
      <button
        className="bg-gray-500 rounded-r-2xl p-2 border-r-2 border-t-2 border-b-2 border-black hover:bg-black hover:text-white"
        onClick={handleClick}
      >
        Add Todo
      </button>
      <FilterButton activeState={activeState} setActiveState={setActiveState} />
      {activeState == "All" && <TodoList list={list} setList={setList} />}
      {activeState == "Active" && <Active list={list} />}
      {activeState == "Completed" && <Completed list={list} />}
      <div className="text-center mt-4">
        <button
          className="font-bold  bg-amber-400 rounded-4xl px-2 py-1 hover:bg-red-600 hover:text-white cursor-pointer"
          onClick={() => {
            setList([]);
            localStorage.removeItem("todos");
          }}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
