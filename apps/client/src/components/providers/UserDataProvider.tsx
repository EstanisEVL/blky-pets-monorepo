import { ReactElement, useEffect, useState } from "react";
import { User } from "../../interfaces/user.interface";
import Contexts from "../../contexts/Contexts";

const API_URL: string = "http://localhost:8080/api";

export type UseUserDataContextType = {
  user: User;
};

const UserDataContext = Contexts.UserContext;

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const UserDataProvider = ({ children }: ChildrenType) => {
  const [userData, setUserData] = useState<User | null>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!userData) {
      fetch(`${API_URL}/auth/current`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
        });
    }
  }, []);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataContext };

export default UserDataContext;
