function Search() {
  return (
    <section className="border border-white flex flex-col items-center justify-center gap-4 p-4 mx-96 my-4">
      <h1 className="text-red-600">NewsNavigator</h1>
      <form
        action=""
        className="flex flex-col justify-center items-center gap-4 w-2/5"
      >
        <div>
          <label htmlFor="search">Search:</label>
          <input type="text" id="search" name="search" />
        </div>
        <div>
          <label htmlFor="lang" id="lang">
            Language:
          </label>
          <select name="lang" id="lang">
            <option value="ar">Arabisch</option>
            <option value="de" selected>
              Deutsch
            </option>
            <option value="en">Englisch</option>
            <option value="es">Spanisch</option>
            <option value="fr">Französisch</option>
            <option value="he">Hebräisch</option>
            <option value="it">Italienisch</option>
            <option value="nl">Niederländisch</option>
            <option value="no">Norwegisch</option>
            <option value="pt">Portugisisch</option>
            <option value="ru">Russisch</option>
            <option value="sv">Schwedisch</option>
            <option value="zh">Chinesisch</option>
          </select>
        </div>
        <div>
          <label htmlFor="sortNews">Sort:</label>
          <select name="sortNews" id="sortNews">
            <option value="relevancy">Relevancy</option>
            <option value="popularity">Popularity</option>
            <option value="publishedAt">First Published</option>
          </select>
        </div>
        <button type="submit" className="border border-white p-2">
          Search
        </button>
      </form>
    </section>
  );
}

export default Search;
