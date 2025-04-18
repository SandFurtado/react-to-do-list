import style from "./Botão.module.css";
import { TIPO_BOTAO } from "./constants";

const Botão = (props) => {
  const { texto, tipo = TIPO_BOTAO.PRIMARIO, ...outrasProps } = props;

  return (
    <button className={style.Botão} tipo={tipo} {...outrasProps}>
      {texto}
    </button>
  );
};

export { Botão };
