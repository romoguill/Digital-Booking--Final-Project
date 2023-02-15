function HomeSearch() {
  return (
    <div>
      <h1>Busca ofertas de casas, departamentos y mucho más</h1>
      <form>
        <input type="text" name="location" placeholder="¿A dónde vamos?" />
        <input
          type="text"
          name="chekin-chekout"
          placeholder="Check in - Check out"
        />
        <button>Buscar</button>
      </form>
    </div>
  );
}

export default HomeSearch;
