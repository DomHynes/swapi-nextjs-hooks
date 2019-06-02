import Link from "next/link";
import React from "react";
import { Box, Card, Text } from "rebass";
import styled from "styled-components";

const Wrapper = styled(Card)`
  cursor: pointer;
`;

interface Props {
  id: string;
  title: string;
}

const MovieCard: React.FC<Props> = ({ id, title, children }) => {
  return (
    <Link
      as={`/films/${id}`}
      href={{
        pathname: "/films",
        query: { id }
      }}
    >
      <Wrapper>
        <Text fontSize={4}>{title}</Text>
        <Box>{children}</Box>
      </Wrapper>
    </Link>
  );
};

export default MovieCard;
