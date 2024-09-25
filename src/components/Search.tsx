import { useState } from "react";
function Search({ fetchNews: fetchNews }: { fetchNews: any }) {
  // form degistiginde state'i guncelle
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    const search = e.currentTarget.search.value;
    const lang = e.currentTarget.lang.value;
    const sort = e.currentTarget.sortNews.value;
    // my_func("aranan deger", "popularity", "en");

    console.log(search);
    console.log(lang);
    console.log(sort);
    fetchNews(search, sort, lang);
  };

  return (
    <section className="border border-white flex flex-col items-center justify-center gap-4 p-4  my-4 rounded-2xl">
      <h1 className="text-white font-semibold text-4xl">NewsNavigator</h1>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col md:flex-row justify-center items-center gap-4 text-white "
      >
        <div className="w-full flex flex-col">
          <label htmlFor="search">Search:</label>
          <input
            className="text-slate-600 p-2 rounded-lg"
            type="text"
            id="search"
            name="search"
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="lang">Language:</label>
          <select
            className="text-slate-600 p-2 rounded-lg"
            name="lang"
            id="lang"
          >
            <option value="de">Deutsch</option>
            <option value="en">Englisch</option>
            <option value="es">Spanisch</option>
            <option value="fr">Französisch</option>
            <option value="he">Hebräisch</option>
            <option value="it">Italienisch</option>
            <option value="nl">Niederländisch</option>
            <option value="no">Norwegisch</option>
            <option value="pt">Portugisisch</option>
            <option value="ru">Russisch</option>
            <option value="ar">Arabisch</option>
            <option value="sv">Schwedisch</option>
            <option value="zh">Chinesisch</option>
          </select>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="sortNews">Sort:</label>
          <select
            className="text-slate-600 p-2 rounded-lg"
            name="sortNews"
            id="sortNews"
          >
            <option value="relevancy">Relevancy</option>
            <option value="popularity">Popularity</option>
            <option value="publishedAt">First Published</option>
          </select>
        </div>
        <button
          type="submit"
          className="border border-white p-2 rounded-xl md:mt-6"
        >
          Search
        </button>
      </form>
    </section>
  );
}

export default Search;
