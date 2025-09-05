import { useState } from "react";

export function FilterButton({ activeState, setActiveState }) {
  return (
    <div className="flex justify-center gap-5 mt-4">
      <button
        className="bg-gray-500 text-white py-1 px-4 rounded-4xl hover:bg-gray-700"
        onClick={() => setActiveState("All")}
      >
        All
      </button>
      <button
        className="bg-gray-500 text-white py-1 px-4 rounded-4xl hover:bg-gray-700"
        onClick={() => setActiveState("Active")}
      >
        Active
      </button>
      <button
        className="bg-gray-500 text-white py-1 px-4 rounded-4xl hover:bg-gray-700"
        onClick={() => setActiveState("Completed")}
      >
        Completed
      </button>
    </div>
  );
}
