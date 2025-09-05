export function Completed({ list }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Completed Todos</h2>
      <ul>
        {list.map((item) => {
          return <li key={item.id}>{item.completed && item.title}</li>;
        })}
      </ul>
    </div>
  );
}
