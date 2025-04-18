import { useState } from "react";
import { Botão, CampoTexto, Loading } from "../../components";
import { useAppContext } from "../../hooks";

import style from "./FormCriarTarefa.module.css";

const FormCriarTarefa = () => {
  const { adicionarTarefa, loadingCriar } = useAppContext();

  const [nomeTarefa, setNomeTarefa] = useState("");

  const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value);
  };

  const submeterFormulario = (event) => {
    event.preventDefault();

    if (!nomeTarefa) {
      return;
    }

    adicionarTarefa(nomeTarefa);
    setNomeTarefa("");
  };

  return (
    <form className={style.FormCriarTarefa} onSubmit={submeterFormulario}>
      <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa} />
      <Botão texto={loadingCriar ? <Loading /> : "+"} />
    </form>
  );
};

export { FormCriarTarefa };
