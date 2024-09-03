import React from 'react';
import { Container, Grid } from '@mui/material';
import { fetchPokemon } from './fetchPokemon';
import PokemonCard from './PokemonCard';
import { Pokemon } from './interfaces';

const PokemonList: React.FC = () => {
    const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

    React.useEffect(() => {
        const fetchPokemons = async () => {
            const pokemonPromises = [];
            for (let i = 1; i <= 150; i++) { // Fetching the first 10 Pokémon as an example
                pokemonPromises.push(fetchPokemon(i));
            }
            try {
                const results = await Promise.all(pokemonPromises);
                setPokemons(results);
            } catch (error) {
                console.error('Error displaying Pokémon data:', error);
            }
        };

        fetchPokemons();
    }, []);

    return (
        <Container>
            <Grid container spacing={2}>
                {pokemons.map(pokemon => (
                    <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
                        <PokemonCard pokemon={pokemon} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PokemonList;
