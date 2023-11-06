import React, { useEffect } from 'react'

import { FindPokemon } from './helper/FindPokemon';
import { PokemonCard } from './components/PokemonCard/PokemonCard';
import { useDispatch, useSelector } from 'react-redux';
import { findPokemon } from './slices/pokemonSlice';
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

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

  return (
    <div className='main'>
      <div className='inputs-container'>
        <Input
          isRequired
          type="text"
          label="Pokemon or Id"
          defaultValue=""
          className="max-w-xs"
        />
        <Button color="primary">
          Search
        </Button>
      </div>
      

      <div className='hero'>

      </div>
    </div>
  )
  
}
