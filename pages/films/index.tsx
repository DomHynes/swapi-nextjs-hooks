import { useQuery } from "graphql-hooks";
import React from "react";
import { Film } from "../../generated/graphql";
import { StatelessPage } from "../../types";
import GET_FILM_DETAIL from "./GetFilmDetail.gql";
import { Flex, Text } from "rebass";

interface Props {
  id: string;
}

const FilmDetail: StatelessPage<Props> = ({ id }) => {
  const { loading, error, data } = useQuery<{ Film: Film }>(GET_FILM_DETAIL, {
    variables: { id }
  });

  return (
    <Flex flexDirection="column">
      {data && (
        <>
          <Text fontSize={4} pb={3}>
            {data.Film.title}
          </Text>
          <Text textAlign="center" pb={3}>
            {data.Film.openingCrawl}
          </Text>
          {data.Film.characters.map(character => (
            <Text>{character.name}</Text>
          ))}
        </>
      )}
    </Flex>
  );
};

FilmDetail.getInitialProps = async function({ query }) {
  return query;
};

export default FilmDetail;
