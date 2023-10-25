import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { findPokemon } from './slices/pokemonSlice';
import { PokemonCard } from './components/PokemonCard/PokemonCard';



export const PokeknowApp = () => {
  const dispatch = useDispatch();

  const pokemon = useSelector((state) => state.pokemon)

  useEffect(()=> {
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then((response)=> response.json())
    .then((data)=> dispatch(findPokemon(data)))
    .catch((error)=> console.log(error))
  }, [])

  return <PokemonCard {...pokemon}/>
}
