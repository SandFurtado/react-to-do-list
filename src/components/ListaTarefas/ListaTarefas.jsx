import { useAppContext } from "../../hooks";

import { ListaTarefasItem } from "./ListaTarefasItem";

import style from "./ListaTarefas.module.css";

const ListaTarefas = () => {
  const { tarefas, loadingCarregar } = useAppContext();

  return (
    <ul className={style.ListaTarefas}>
      {loadingCarregar && <p>Carregando...</p>}
      {!loadingCarregar && !tarefas.length && <p>Não há tarefas cadastradas</p>}

      {tarefas.map((item) => (
        <ListaTarefasItem key={item.id} id={item.id} nome={item.nome} />
      ))}
    </ul>
  );
};

export { ListaTarefas };
