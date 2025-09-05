export function TodoList({ list, setList }) {
  function handleDone(item) {
    const updatedList = list.map((todo) => {
      if (todo.id == item.id) {
        return {
          ...todo,
          completed: true,
        };
      }
      return todo;
    });
    setList(updatedList);
  }
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Todos</h2>
      <ul className="mt-4">
        {list.map((item) => {
          return (
            <li
              key={item.id}
              className="flex justify-between items-center mb-2"
            >
              <div
                className={`font-bold cursor-pointer ${
                  item.completed ? "line-through" : ""
                }`}
              >
                {item?.title.length > 20
                  ? item.title.slice(0, 20) + "..."
                  : item.title}
              </div>
              <button
                className="hover:text-red-600 hover:cursor-pointer font-bold bg-green-600 rounded-3xl px-3 py-1"
                onClick={() => handleDone(item)}
              >
                Done
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
