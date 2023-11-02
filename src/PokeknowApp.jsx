import React, { useEffect } from 'react'
import {Button} from "@nextui-org/react";
import { FindPokemon } from './helper/FindPokemon';
import { PokemonCard } from './components/PokemonCard/PokemonCard';
import { useDispatch, useSelector } from 'react-redux';
import { findPokemon } from './slices/pokemonSlice';


export const PokeknowApp = () => {

  const pokemon = useSelector((state) => state.pokemon)
  const dispatch = useDispatch()

  useEffect(
    () => {
      fetch('https://pokeapi.co/api/v2/pokemon/1/')
      .then((response)=> response.json())
      .then((data)=> dispatch(findPokemon(data)))
      .catch((error)=> console.log(error))
    },
    []
  )

  return <PokemonCard {...pokemon}/>
  
}
