import './MultiSearch.scss';
import Select from 'react-select';
import { useEffect, useState } from 'react';

const searchByOptions = [
  {
    value: 'id',
    label: 'ID',
  },
  {
    value: 'name',
    label: 'Nombre',
  },
];

function MultiSearch() {
  const [isLodingData, setIsLoadingData] = useState(true);
  const [optionsForSearch, setOptionsForSearch] = useState([]);
  const [data, setData] = useState([]);
  const [selectedRental, setSelectedRental] = useState(null);

  const buildOptionsForSearch = (data) => {
    setOptionsForSearch(
      data.map((rental) => ({
        value: rental.id,
        label: `${rental.id} - ${rental.titulo}`,
      }))
    );
  };

  useEffect(() => {
    const loadRentals = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/productos/todasRandom`
      );
      setData(await response.json());
      setIsLoadingData(false);
    };

    loadRentals();
  }, []);

  useEffect(() => {
    buildOptionsForSearch(data);
  }, [data]);

  return (
    <form className="multi-search__container">
      <Select
        className="search-input"
        placeholder="Ingrese busqueda"
        options={optionsForSearch}
        isDisabled={isLodingData}
        onChange={setSelectedRental}
      />
    </form>
  );
}

export default MultiSearch;
