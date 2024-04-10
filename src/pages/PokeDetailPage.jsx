import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useEffect, useState } from 'react';
import '../pages/styles/pokeDetailPage.css';

const PokeDetailPage = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemon] = useFetch(url);
  

  useEffect(() => {
    getPokemon();
  }, [name]);

  console.log(pokemon);

  return (
    <div className={`card_detail border-${pokemon?.types[0].type.name}`}>
      <header
        className={`card_Detail_header bg-${pokemon?.types[0].type.name}`}
      >
        <img
          className="uni_img"
          src={pokemon?.sprites?.other['official-artwork'].front_default}
          alt=""
        />
      </header>
      <h2>{pokemon?.id}</h2>
      <h2 className={`card_name_detail color-${pokemon?.types[0].type.name}`}>
        {pokemon?.name}
      </h2>

      <div className="type_detail">
        <div className='types_detail' >
          <h3 className= {`type_title bg-${pokemon?.types[0].type.name}`} >Type</h3>
          <ul className="type_ul">
            {pokemon?.types.map((type, index) => (
              <li className= "li_type" key={index}>{type.type.name}</li>
            ))}
          </ul>
        </div>
        <br></br>
        <div className='skills_detail' >
          <h3 className={`skill_title bg-${pokemon?.types[0].type.name}`}>Skills</h3>
          <div>
            <ul className="ul_skills">
              {pokemon?.abilities.map((ability, index) => (
                <li  className='skill_li' key={index}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <br></br> 
      <div className="stats">
         <h3 className= {`stats_title bg-${pokemon?.types[0].type.name}`}>Stats</h3>
        <ul className="ul_stats">
          {pokemon?.stats.map((stat, index) => (
            <li className="stats_li" key={index}>
              <span className='stats_label' >{stat.stat.name}</span>
              <span className={`stats_value color-${pokemon?.types[0].type.name}`} > {stat.base_stat}{' '}</span>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <div className="moves">
        <h3 className={`noves_title bg-${pokemon?.types[0].type.name}`} >Moves</h3>
        <ul>
          {pokemon?.moves.map((move, index) => (
            <li key={index}>{move.move.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokeDetailPage;
