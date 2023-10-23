import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        //Strings
        name: '',
        location_area_encounters: '',
        //Int
        height: 0,
        weight: 0,
        id: 0,
        //Arrays
        abilities: [],
        forms: [],
        game_indices: [],
        held_items: [],
        moves: [],
        stats: [],
        types: [],
        
    },
    reducers: {
        findAllPokemons: () => {
            //Este sera el reducer para almacenar todos los nombres y id de todos los pokemones para mostrarlos en pantalla
        
            //Despues de buscarlos, cuando el usuario le da click hara la busqueda con findPokemon y mostrara el pokemon.
        },
        findPokemon: (state, action) => {
            const {
                name,
                location_area_encounters,
                height, 
                weight, 
                id, 
                abilities, 
                forms, 
                game_indices,
                held_items,
                moves,
                stats,
                types,
                
            } = action.payload

            state.name = name;
            state.location_area_encounters = location_area_encounters;
            state.height = height; //Necesario transformar de hectogramos a kilogramos o libras
            state.weight = weight; //Necesario transformar de decimetros a centimetros o metros
            state.id = id;
            state.abilities = abilities;
            state.forms = forms;
            state.game_indices = game_indices;
            state.held_items = held_items;
            state.moves = moves;
            state.stats = stats; 
            state.types = types;
            
        },

    }
})

export const {findPokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer