import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstanse = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1d137f6245044bd5ad0739711f5689d8",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstanse
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}


export default APIClient;