import React, { useState } from "react";
import PokeCard from "./PokeCard";
import '../PokedexPage/style/list_pokemons.css'






const ListPokemons = ({ pokemons }) => {


  return (
      <div className="list_pokemons" >
          {
            pokemons?.map( pokeInfo => (
              <PokeCard
                  key={pokeInfo.url}
                  pokeInfo={pokeInfo}
              />
            ))
          }   
      </div>
    )
  }

export default ListPokemons;





/*
si no funciona asi estaba
const ListPokemons = ({pokemons}) => {
  return (
    <div>
        {
          pokemons?.map( pokeInfo => (
            <PokeCard
                key={pokeInfo.url}
                pokeInfo={pokeInfo}
            />
          ))
        }   
    </div>
  )
}*/