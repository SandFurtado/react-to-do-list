import { Outlet } from "react-router-dom";
import { Cabeçalho, Conteudo, Rodape } from "../../components";
import { useAppContext } from "../../hooks";

const LayoutPadrao = () => {
  const { criador } = useAppContext();
  return (
    <>
      <Cabeçalho nomeUsuario="Joana" />
      <Conteudo>
        <Outlet />
      </Conteudo>
      <Rodape criador="Sandy" />
    </>
  );
};

export { LayoutPadrao };
