import Search from "./components/Search";
import Card from "./components/Card";

const API_KEY: string = "5e5e4c31ffa647289c9308889c58f985";

function App() {
  fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY");

  return (
    <div>
      <Search />
      <Card />
    </div>
  );
}

export default App;
