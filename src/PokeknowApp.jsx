import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { findPokemon } from './slices/pokemonSlice';

export const PokeknowApp = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then((response)=> response.json())
    .then((data)=> dispatch(findPokemon(data)))
    .catch((error)=> console.log(error))
  })
}
