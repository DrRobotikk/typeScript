import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todoes</h1>
      <Todo text="Learn react" />
      <Todo text="Learn TypeScript" />
      <Todo text="Learn react with TypeScript" />
    </div>
  );
}

export default App;
