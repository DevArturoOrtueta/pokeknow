import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        name: '',
        height: 0,
        weight: 0,
        id: 0,
        abilities: [],
        forms: [],
        game_indices: [],
        held_items: []
    },
    reducers: {
        findAllPokemons: () => {
            //Este sera el reducer para almacenar todos los nombres y id de todos los pokemones para mostrarlos en pantalla
        
            //Despues de buscarlos, cuando el usuario le da click hara la busqueda con findPokemon y mostrara el pokemon.
        },
        findPokemon: (state, action) => {
            const {
                name,
                height, 
                weight, 
                id, 
                abilities, 
                forms, 
                game_indices,
                held_items,
            } = action.payload

            state.name = name;
            state.height = height; //Necesario transformar de hectogramos a kilogramos o libras
            state.weight = weight; //Necesario transformar de decimetros a centimetros o metros
            state.id = id;
            state.abilities = abilities;
            state.forms = forms;
            state.game_indices = game_indices;
            state.held_items = held_items;
        },

    }
})

export const {findPokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer