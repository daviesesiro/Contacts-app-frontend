import { AxiosResponse } from "axios";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "react-query";
import axios from "../axiosInstance";

const getContacts = async (search: string): Promise<any[]> => {
  const token = localStorage.getItem("token");
  const headers = { authorization: `Bearer ${token}` };

  const { data } = await axios.get(`/contact${search && `?search=${search}`}`, {
    headers,
  });
  return (data as any).data.contacts;
};

export const useGetContats = (
  option:
    | Omit<
        UseQueryOptions<any, unknown, any[], string[]>,
        "queryKey" | "queryFn"
      >
    | undefined,
  search: string = ""
) => {
  return useQuery(["contacts", search], () => getContacts(search));
};

interface ContactBody {
  email: string;
  name: string;
  dials: { kind: string; dial: string }[];
}

export const useAddContact = (
  option:
    | Omit<
        UseMutationOptions<
          AxiosResponse<unknown, any>,
          unknown,
          ContactBody,
          unknown
        >,
        "mutationFn"
      >
    | undefined
) => {
  const token = localStorage.getItem("token");
  const headers = { authorization: `Bearer ${token}` };

  return useMutation(
    (body: ContactBody) => axios.post(`/contact`, body, { headers }),
    option
  );
};
