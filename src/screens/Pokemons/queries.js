import {gql} from 'apollo-boost';

export const POKEMONS_QUERY = gql`
query Pokemon ($id: String) {
    pokemons(first: 10) {
        id
        name
        image
        types
        weaknesses
        evolutions{
            id
            name
            image
        }


    }
}
    `;