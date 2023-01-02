import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Usuario from "../pages/Usuario";
import UsuarioList from "../pages/UsuarioList";
import Setor from "../pages/Setor";
import SetorList from "../pages/SetorList";
import Patrimonio from "../pages/Patrimonio";
import PatrimonioList from "../pages/PatrimonioList";

import NotFound from "../pages/NotFound";

const RoutesApp = () => {
    return (
        <Routes>
            {/*  
                <Route path="/" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
            */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="/usuarioList" element={<UsuarioList />} />
            <Route path="/setor" element={<Setor />} />
            <Route path="/setorList" element={<SetorList />} />
            <Route path="/patrimonio" element={<Patrimonio />} />
            <Route path="/patrimonioList" element={<PatrimonioList />} />

            <Route path="/*" element={<NotFound />} />
        </Routes>
    )
}

export default RoutesApp;