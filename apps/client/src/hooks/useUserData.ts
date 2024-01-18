import { useContext } from "react";
import UserDataContext, {
  UseUserDataContextType,
} from "../components/providers/UserDataProvider";

const useUserData = (): UseUserDataContextType => {
  return useContext<any>(UserDataContext);
};

export default useUserData;
