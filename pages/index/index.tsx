import { useQuery } from "graphql-hooks";
import React from "react";
import { Flex, Text } from "rebass";
import MovieCard from "../../components/MovieCard";
import GetMovies from "./GetMovies.gql";

const Index = () => {
  const { loading, error, data } = useQuery(GetMovies);

  return (
    <Flex flexDirection="column">
      <Text>Welcome</Text>
      {loading && <Text>loading</Text>}
      {error && <Text>error</Text>}
      {data &&
        data.allFilms.map(film => (
          <MovieCard id={film.id} title={film.title}>
          </MovieCard>
        ))}
    </Flex>
  );
};

export default Index;
