import style from "./Rodape.module.css";

const Rodape = (props) => {
  const { criador } = props;
  const anoAtual = new Date().getFullYear();

  return (
    <div className={style.Rodape}>
      <div>
        React Básico - {anoAtual} - {criador}
      </div>
    </div>
  );
};

export { Rodape };
