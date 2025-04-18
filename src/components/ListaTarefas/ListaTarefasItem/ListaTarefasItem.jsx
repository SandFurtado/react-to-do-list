import { useAppContext } from "../../../hooks";
import { useState } from "react";
import { Botão, TIPO_BOTAO } from "../../Botão";
import { CampoTexto } from "../../CampoTexto";

import style from "./ListaTarefasItem.module.css";
import { Loading } from "../../Loading";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const [estaEditando, setEstaEditando] = useState(false);

  const { editarTarefa, removerTarefa, loadingEditar, LoadingDeletar } =
    useAppContext();

  const enviarTarefa = (event) => {
    const nomeTarefa = event.currentTarget
      ? event.currentTarget.value
      : event.target.value;

    editarTarefa(id, nomeTarefa);

    setEstaEditando(false);
  };

  const verificaEnter = (event) => {
    if (event.key == "Enter") enviarTarefa(event);
  };

  const loadingEstaEditando = loadingEditar == id;
  const loadingEstaDeletando = LoadingDeletar == id;

  return (
    <li className={style.ListaTarefasItem}>
      {loadingEstaEditando ||
        (estaEditando && (
          <CampoTexto
            defaultValue={nome}
            onKeyDown={verificaEnter}
            onBlur={enviarTarefa}
            autoFocus
          />
        ))}
      {!loadingEstaEditando && !estaEditando && (
        <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
      )}

      {loadingEstaEditando && <Loading />}

      <Botão
        texto={loadingEstaDeletando ? <Loading /> : "-"}
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefa(id)}
      />
    </li>
  );
};

export { ListaTarefasItem };
