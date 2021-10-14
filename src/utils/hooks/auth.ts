import { AxiosResponse } from "axios";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "react-query";
import axios from "../axiosInstance";

interface RegisterBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
interface LoginBody {
  email: string;
  password: string;
}

export const useLogin = (
  option:
    | Omit<
        UseMutationOptions<
          AxiosResponse<unknown, any>,
          unknown,
          LoginBody,
          unknown
        >,
        "mutationFn"
      >
    | undefined
) => {
  return useMutation(
    (body: LoginBody) => axios.post(`/auth/login`, body),
    option
  );
};

export const useCurrentUser = (
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
    | undefined
) => {
  const token = localStorage.getItem("token");
  const headers = { authorization: `Bearer ${token}` };

  return useQuery(
    ["currentUser"],
    () => axios.get(`/auth/current-user`, { headers }),
    { ...option, retry: 1, refetchOnWindowFocus: false }
  );
};

export const useRegister = (
  option:
    | Omit<
        UseMutationOptions<
          AxiosResponse<unknown, any>,
          unknown,
          LoginBody,
          unknown
        >,
        "mutationFn"
      >
    | undefined
) => {
  return useMutation(
    (body: RegisterBody) => axios.post(`/auth/register`, body),
    option
  );
};
