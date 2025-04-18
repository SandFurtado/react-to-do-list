import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const useAppContext = () => {
  const contexto = useContext(AppContext);
  return contexto;
};
export { useAppContext };
