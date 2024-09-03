export interface Pokemon {
    id: number;
    name: string;
    types: Type[];
}

export interface Type {
    type: {
        name: string;
    };
}
