import { Routes, Route } from "react-router-dom";
import { Inicial, SobreNos } from "./pages";
import { LayoutPadrao } from "./layouts";
import { Erro404 } from "./pages/Erro404";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPadrao />}>
        <Route path="/" element={<Inicial />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
      <Route path="*" element={<Erro404 />}></Route>
      </Route>
    </Routes>
  );
};

export { Router };
