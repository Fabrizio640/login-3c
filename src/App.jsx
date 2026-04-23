import { useState } from "react";
import "./App.css";

import logo from "./assets/img/Logonetflix.png";
import catalogoImg from "./assets/img/netflix.png";

export default function App() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <main>
      <div className="catalogo-panel">
        <img src={catalogoImg} alt="Catalogo" className="catalogo-img" />
      </div>

      <div className="form-panel">
        <img src={logo} alt="Logo" className="logo" />

        <h1 className="titulo">Fazer login</h1>

        <label className="label">Login</label>
        <input
          type="text"
          placeholder="Digite seu login..."
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <label className="label">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha..."
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button className="btn-entrar">ENTRAR</button>

        <a href="#" className="link-forgot">Esqueci meu login ou senha</a>
      </div>
    </main>
  );
}