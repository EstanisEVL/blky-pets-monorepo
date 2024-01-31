import { ReactElement, useEffect, useState } from "react";
import { User } from "../../interfaces/user.interface";
import Contexts from "../../contexts/Contexts";

const URL: string = String(import.meta.env.VITE_API_URL);

export type UseUserDataContextType = {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userData?: User | null;
  setUserData: React.Dispatch<React.SetStateAction<User | null>>;
  accessToken: boolean;
  setAccessToken: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserDataContext = Contexts.UserContext;

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const UserDataProvider = ({ children }: ChildrenType) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState(false);

  useEffect(() => {
    if (userData) {
      setUserData(null);
    }

    if (!userData && accessToken) {
      let token = localStorage.getItem("access_token");

      fetch(`${URL}/auth/current`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.statusCode === 401) {
            return;
          }
          setUserData(data);
        });
    }
  }, [loggedIn]);

  return (
    <UserDataContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        userData,
        setUserData,
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataContext };

export default UserDataContext;
