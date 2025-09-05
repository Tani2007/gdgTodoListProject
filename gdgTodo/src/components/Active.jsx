export function Active({ list }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Active Todos</h2>
      <ul>
        {list.map((currItem) => {
          return (
            <li key={currItem.id}>{!currItem.completed && currItem.title}</li>
          );
        })}
      </ul>
    </div>
  );
}
