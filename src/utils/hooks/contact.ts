import { AxiosResponse } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import axios from "../axiosInstance";

export const useGetContats = (
  option:
    | Omit<
        UseQueryOptions<
          AxiosResponse<unknown, any>,
          unknown,
          AxiosResponse<unknown, any>,
          string[]
        >,
        "queryKey" | "queryFn"
      >
    | undefined,
  search: string = ""
) => {
  const token = localStorage.getItem("token");
  const headers = { authorization: `Bearer ${token}` };

  return useQuery(
    ["contacts", search],
    () => axios.get(`/contact${search && `?search=${search}`}`, { headers }),
    { ...option }
  );
};
