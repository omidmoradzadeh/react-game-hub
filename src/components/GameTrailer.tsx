import React from "react";
import useTrailers from "../hooks/useTrailers";
import { Box } from "@chakra-ui/react";
interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);
  if (isLoading) return null;

  const first = data?.results[0];
  if (!first) return null;

  if (error) throw error;
  return (
    <Box marginY={5}>
      <video src={first.data[480]} poster={first.preview} controls></video>
    </Box>
  );
};

export default GameTrailer;
