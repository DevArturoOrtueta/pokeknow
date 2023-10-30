import { createSlice } from '@reduxjs/toolkit';

export const allPokemonSlice = createSlice({
    name: 'allpokemon',
    initialState: {
        //Int
        count: 0,
        //String
        next: 'https://pokeapi.co/api/v2/pokemon/',
        previous: '',
        //Arrays
        results: [] 
    },
    reducers: {
        findAllPokemon: (state, action) => {
            const {
                count,
                next, 
                previous,
                results
            } = action.payload

            state.count = count;
            state.next = next;
            state.previous = previous;
            state.results = results; 
        },

    }
})

export const {findAllPokemon} = allPokemonSlice.actions;
export default allPokemonSlice.reducer