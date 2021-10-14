import { createContext, useContext, useEffect, useState } from "react";
import { LoaderScreen } from "../components/Loading";
import { useCurrentUser } from "../utils/hooks/auth";

const AuthContext = createContext<{
  user?: IUser;
  token?: string;
  setAuth?: (data: { user: IUser; token: string }) => void;
  logout?: () => void;
}>({});

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}
const AuthContextProvider: React.FC<{}> = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>();
  const [token, setToken] = useState<string | undefined>();

  const setAuth = (auth: { user?: IUser; token?: string }) => {
    setUser(auth.user);
    setToken(auth.token);
  };

  const logout = () => {
    setAuth({});

    localStorage.removeItem("token");
  };

  const { isLoading } = useCurrentUser({
    onSuccess: (result: any) => {
      setUser(result?.data.data.user);
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token") || undefined;
    setToken(token);
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, logout, setAuth }}>
      {isLoading ? <LoaderScreen /> : children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
