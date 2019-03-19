// import ApolloClient from 'apollo-boost';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {SchemaLink} from 'apollo-link-schema';
import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools';
import typeDefs from './schema';
import mocks from './mocks';

// Create GraphQL schema object
const schema = makeExecutableSchema({typeDefs});

// Add mocks
addMockFunctionsToSchema({schema, mocks});

const cache = new InMemoryCache(window.__APOLLO_STATE__);

export default () =>
  new ApolloClient({
    link: new SchemaLink({schema}),
    cache,
  });
