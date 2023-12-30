import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import {FetchResponse} from '../services/api-client'

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

type NewType = FetchResponse<Genre>;

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<NewType>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24H
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
function FetchResponse<T>(arg0: string) {
  throw new Error("Function not implemented.");
}
