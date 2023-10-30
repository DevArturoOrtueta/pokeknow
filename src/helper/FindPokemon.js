import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector} from 'react-redux/es/hooks/useSelector'
import { findAllPokemon } from '../slices/allPokemonSlice'


export const FindPokemon = () => {
    
    const dispatch = useDispatch()
    const {count, next, previous, results} = useSelector((state) => state.allpokemon)
    
  useEffect(
    () => {
      fetch(next)
      .then((response)=> response.json())
      .then((data)=> dispatch(findAllPokemon(data)))
      .catch((error)=> console.log(error))
    },
    []
  )


      return {
        count,
        next,
        previous,
        results
      }
}
