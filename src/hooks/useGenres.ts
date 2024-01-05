import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import ms from 'ms';
import { Genre } from "../entities/Genre";

type NewType = FetchResponse<Genre>;
const apiClient = new APIClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime:  ms('24h'),//24 * 60 * 60 * 1000, // 24H
    initialData: genres,
  });

export default useGenres;
function FetchResponse<T>(arg0: string) {
  throw new Error("Function not implemented.");
}
