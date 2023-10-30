import React from 'react'
import {Button} from "@nextui-org/react";
import { FindPokemon } from './helper/FindPokemon';
import { PokemonCard } from './components/PokemonCard/PokemonCard';


export const PokeknowApp = () => {

  return <>
      <Button color="primary" onClick={FindPokemon()}>
        Button
      </Button>
  </> 
  

}
