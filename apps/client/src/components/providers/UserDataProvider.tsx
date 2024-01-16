import { ReactElement, useEffect, useState } from "react";
import { User } from "../../interfaces/user.interface";
import Contexts from "../../contexts/Contexts";

// const API_URL: string = "http://localhost:8080/api";

export type UseUserDataContextType = {
  user: User;
};

const UserDataContext = Contexts.UserContext;

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const UserDataProvider = ({ children }: ChildrenType) => {
  const [userData, setUserData] = useState<User | null>(null);

  // Traer el data del localStorage:

  useEffect(() => {
    // Llamar al endpoint que verifica tokens y sacar la info desde ahí
    // Agregarlo al data
    // const data =
    // En cada render si no hay un usuario, hacer la petición al endpoint
    // const data = localStorage.getItem("user");
    // const data = JSON.parse(localStorage.getItem("user"));
    // if (!userData) {
    //   setUserData(data);
    // }
    // console.log(JSON.stringify(data));
    // console.log(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <UserDataContext.Provider value={{ userData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataContext };

export default UserDataContext;
