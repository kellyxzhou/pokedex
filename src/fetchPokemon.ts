import axios from 'axios';
import { Pokemon } from './interfaces';

// Fetch Pokémon data from the PokéAPI
export async function fetchPokemon(pokemonId: number): Promise<Pokemon> {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = response.data;

        return {
            id: data.id,
            name: data.name,
            types: data.types.map((typeInfo: { type: { name: string } }) => ({
                type: {
                    name: typeInfo.type.name
                }
            }))
        };
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        throw error;
    }
}
