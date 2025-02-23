import { Route, useNavigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import HomeRoutes from '../View/Home/Home' ;
import LoginRoutes from "../View/Login/Login";
import CadastroRoutes from '../View/Cadastro/Cadastro';

//My imports
import storage from "../services/localStorage";


export default function Main () {
    const navigate = useNavigate();
    return (
      <Routes >
        <Route path="/" element={<LoginRoutes />} />
        <Route path="/Home" element={<HomeRoutes />} />
        <Route path="/Cadastro/*" element={<CadastroRoutes />} />
      </Routes>
     );
}