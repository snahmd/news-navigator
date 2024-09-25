import Search from "./components/Search";
import Card from "./components/Card";
import { useEffect, useRef, useState } from "react";

// interface fetchNews {
//   search: string;
//   sort: string;
//   lang: string;
// }

const APIKey: string = "5e5e4c31ffa647289c9308889c58f985";

function App() {
  const divReferansi = useRef(null);
  const [news, setNews] = useState([]);
  const fetchNews = (search: string, sort: string, lang: string) => {
    fetch(
      `https://newsapi.org/v2/everything?q=${search}&from=2024-09-20&sortBy=${sort}&language=${lang}&apiKey=${APIKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col justify-center items-center flex-wrap">
      <Search fetchNews={fetchNews} />
      <div className="flex flex-row flex-wrap gap-8 justify-center  items-center">
        {news.map((item) => {
          return (
            <Card
              title={item.title}
              image={item.urlToImage}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
