import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, CardMedia, Container } from '@mui/material';
import { fetchPokemon } from './fetchPokemon';
import { Pokemon } from './interfaces';

const PokemonDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        if (id) {
            fetchPokemon(parseInt(id))
                .then(setPokemon)
                .catch(error => console.error('Error fetching Pokémon details:', error));
        }
    }, [id]);

    if (!pokemon) return <div>Loading...</div>;

    return (
        <Container>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    alt={pokemon.name}
                />
                <CardContent>
                    <Typography variant="h4" component="div">
                        {pokemon.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Types: {pokemon.types.map(type => type.type.name).join(', ')}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default PokemonDetail;
