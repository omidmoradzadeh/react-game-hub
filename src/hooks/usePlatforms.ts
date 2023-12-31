import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import platfoms from "../data/platfoms";
import ms from "ms";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    //useData<Platform>("/platforms/lists/parents");
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 * 60 * 60 * 1000, // 24H
    initialData: platfoms,
  });

export default usePlatforms;
