import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { Pokemon } from './interfaces';

interface PokemonCardProps {
    pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    return (
        <Card sx={{ height: 300, display: 'flex', flexDirection: 'column' }}>
            <Link to={`/pokemon/${pokemon.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    alt={pokemon.name}
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="h5" component="div">
                        {pokemon.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Types: {pokemon.types.map(type => type.type.name).join(', ')}
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    );
};

export default PokemonCard;
