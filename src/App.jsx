import "./App.css";
import PlayerList from "./Components/PlayerList";
import playList from "./Components/Data";

function App() {
  return (
    <>
      <PlayerList playList={playList} />
    </>
  );
}

export default App;
