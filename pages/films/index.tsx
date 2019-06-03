import { useQuery } from "graphql-hooks";
import React from "react";
import { Film } from "../../generated/graphql";
import { StatelessPage } from "../../types";
import GetFilmDetail from "./GetFilmDetail.gql";
import { Flex, Text, Box } from "rebass";

interface Props {
  id: string;
}

const FilmDetail: StatelessPage<Props> = ({ id }) => {
  const { loading, error, data, refetch } = useQuery<{ Film: Film }>(
    GetFilmDetail,
    {
      variables: { id }
    }
  );

  if (loading) {
    return <Text>loading...</Text>;
  }

  return (
    <Flex flexDirection="column">
      {data && (
        <>
          <Text fontSize={4} pb={3} onClick={() => refetch()}>
            {data.Film.title}
          </Text>
          <Text textAlign="center" pb={3}>
            {data.Film.openingCrawl}
          </Text>
          <Flex flex="1 1 auto" flexWrap="wrap">
            {data.Film.characters.map(character => (
              <Box p={2}>
                <Text fontWeight="bold">{character.name}</Text>
                <Text>{character._filmsMeta.count}</Text>
                <Text>{character.species.map(species => species.name)}</Text>
              </Box>
            ))}
          </Flex>
        </>
      )}
    </Flex>
  );
};

FilmDetail.getInitialProps = async function({ query }) {
  return query;
};

export default FilmDetail;
