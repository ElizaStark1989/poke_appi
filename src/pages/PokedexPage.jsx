import { useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';
import { useEffect, useRef, useState } from 'react';
import ListPokemons from '../components/PokedexPage/ListPokemons';
import SelectType from '../components/PokedexPage/SelectType';
import Pagination from '../components/Pagination/Pagination';
import './pokedexpage.css';

const PokedexPage = () => {
  const [pokeSearch, setPokeSearch] = useState('');
  const [typeSelected, setTypeSelected] = useState('allPokemons');
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');

  const inputSearch = useRef();

  const trainer = useSelector(states => states.trainer);

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
  const [pokemons, getPokemons, getPokeByType] = useFetch(url);

  useEffect(() => {
    if (typeSelected === 'allPokemons') {
      getPokemons();
    } else {
      getPokeByType(typeSelected);
    }
  }, [typeSelected, getPokemons, getPokeByType]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchTerm = inputSearch.current.value.trim().toLowerCase();

    if (!searchTerm && typeSelected === 'allPokemons') {
      // Si el campo de búsqueda está vacío y se ha seleccionado 'allPokemons', mostrar todos los Pokémones
      getPokemons();
      setPokeSearch('');
      setError('');
    } else {
      const pokemonFound = pokemons?.results.find(poke =>
        poke.name.startsWith(searchTerm),
      );

      if (!pokemonFound) {
        setError(`Pokemon "${searchTerm}" not found`);
        setPokeSearch('');
      } else {
        setPokeSearch(pokemonFound.name);
        setError('');
      }

      if (!searchTerm && typeSelected !== 'allPokemons') {
        getPokeByType(typeSelected);
        setPokeSearch('');
        setError('');
      }
    }
  };

  const handleTypeChange = newType => {
    setTypeSelected(newType);
    setPokeSearch('');
    setError('');
    if (newType === 'allPokemons') {
      // Si se selecciona "All Pokemons", obtener todos los Pokémones
      getPokemons();
    } else {
      // Si se selecciona otro tipo, obtener los Pokémones por ese tipo
      getPokeByType(newType);
    }
  };

  const pokemonsFiltered = pokemons?.results.filter(poke => {
    return poke.name.includes(pokeSearch);
  });

  const pokemonsPerPage = 10;
  const totalPages = Math.ceil(pokemonsFiltered?.length / pokemonsPerPage);

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemonsFiltered?.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon,
  );

  return (
    <div className="pokedex_container">
      <img src="/pokemon3.jpg" alt="Pokemon Banner" className="banner_image" />
      <div className="pokedex_header">
        <p className="parrafo">
          Welcome <span className="trainer_name">{trainer}</span>, here you can
          find your favorite pokemon
        </p>
        <form onSubmit={handleSubmit}>
          <input ref={inputSearch} type="text" placeholder="Search..." />
          <button type="submit">Search</button>
          <SelectType setTypeSelected={handleTypeChange} />
        </form>
        {error && <p className="error_message">{error}</p>}
      </div>
      <div className="pokedex_content">
        <ListPokemons pokemons={currentPokemons} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default PokedexPage;