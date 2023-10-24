import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { findPokemon } from './slices/pokemonSlice';


export const PokeknowApp = () => {
  const dispatch = useDispatch();

  const pokemon = useSelector((state) => state.pokemon)

  useEffect(()=> {
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then((response)=> response.json())
    .then((data)=> dispatch(findPokemon(data)))
    .catch((error)=> console.log(error))
  }, [])

  return <>
    <h1>{pokemon.name}</h1>
  </>
}
