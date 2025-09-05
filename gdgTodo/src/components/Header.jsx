import { AddTodo } from "./AddTodo";
import { Footer } from "./Footer";

export function Header() {
  return (
    <div>
      <header className="font-bold text-4xl text-center">
        <h1>Todo App</h1>
      </header>
      <AddTodo />
      <Footer />
    </div>
  );
}
