import { Link } from "react-router-dom";
import style from "./Cabeçalho.module.css";

const Cabeçalho = () => {
  return (
    <div className={style.Cabeçalho}>
      <Link to="/">
        <h1>
          <span>ToDo </span>
          List
        </h1>
      </Link>

      <Link to="/sobre-nos">Sobre Nós</Link>
    </div>
  );
};

export { Cabeçalho };
