import { createSlice } from '@reduxjs/toolkit';

export const allPokemonSlice = createSlice({
    name: 'allpokemon',
    initialState: {
        //Int
        count: 0,
        //Arrays
        results: [] 
    },
    reducers: {
        findAllPokemon: (state, action) => {
            const {
                count,
                results
            } = action.payload

            state.count = count,
            state.results = results  
        },

    }
})

export const {findAllPokemon} = allPokemonSlice.actions;
export default allPokemonSlice.reducer