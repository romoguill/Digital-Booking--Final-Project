import './HomeSearch.scss';

function HomeSearch() {
  return (
    <div className="home-search">
      <div className="container-main">
        <h1>Busca ofertas de casas, departamentos y mucho más</h1>
        <form className="search-by-location-date">
          <input type="text" name="location" placeholder="¿A dónde vamos?" />
          <input
            type="text"
            name="chekin-chekout"
            placeholder="Check in - Check out"
          />
          <button className="button-primary button-primary--full">
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomeSearch;
