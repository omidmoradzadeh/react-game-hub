import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import platfoms from "../data/platfoms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    //useData<Platform>("/platforms/lists/parents");
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24H
    initialData: platfoms
  });

export default usePlatforms;
