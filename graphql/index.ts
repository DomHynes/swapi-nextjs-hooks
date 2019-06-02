import { GraphQLClient } from "graphql-hooks";
import memCache from "graphql-hooks-memcache";
import fetch from "unfetch";

const client = new GraphQLClient({
  url: "https://swapi.graph.cool/",
  cache: memCache(),
  fetch
});

export default client;
