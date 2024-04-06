import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import '../PokedexPage/style/pokeCard.css';

 const PokeCard = ({ pokeInfo }) => {
 
 const [ pokemon, getPokemon ] = useFetch(pokeInfo.url);

 useEffect(() => {
  getPokemon()
 }, []);

 const navigate = useNavigate();

 const handlePokeDetail = () => {
    navigate(`/pokedex/${pokeInfo.name}`)
};
 
    return (
        <articule className= {`card border-${pokemon?.types[0].type.name}`}  onClick={handlePokeDetail}>
            <header  className={`card_header bg-${pokemon?.types[0].type.name}`}>
                <img  className="card_img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            </header>
            <section className="card_principal" >
                <h3 className= {`card_name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
                <ul className="card_types" >
                    {
                        pokemon?.types.map(typeInfo => (
                            <li className="card_type" key={typeInfo.type.url}>{typeInfo.type.name}</li>
                        ))
                    }
                </ul>
            </section>
            <hr className="card_hr" />
            <section className="card_stats" >
                <ul className="card_list" >
                    {
                        pokemon?.stats.map(statInfo => (
                            <li className="card_stat"  key={statInfo.stat.url}>
                                <span className="card_stat_label" >{statInfo.stat.name}</span>
                                <span className={`card_stat_value color-${pokemon?.types[0].type.name}`} >{statInfo.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </articule>
    )
}

export default PokeCard;