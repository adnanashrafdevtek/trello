import "./styles.css";
import Board from "react-trello";
import data from "./data.json";

export default function App() {
  return (
    <div className="App">
      <h1>react-trello demo</h1>
      <Board data={data} draggable />
    </div>
  );
}
