
import {AppRegistry} from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';
// import App from './App';
import Router from './src/Router';
import {name as appName} from './app.json';
import { HttpLink } from 'apollo-boost';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://graphql-pokemon.vercel.app/'
    }),
    cache: new InMemoryCache(),
})

const App = () => (
    <ApolloProvider client = {client}>
        <Router />
    </ApolloProvider>
)

AppRegistry.registerComponent(appName, () => Router);
