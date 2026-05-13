import { useNavigate } from 'react-router-dom'
import "./App.css";

import logo from "./assets/img/Logonetflix.png";
import catalogoImg from "./assets/img/netflix.png";

export default function App() {
  const navigate = useNavigate()

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
        />

        <label className="label">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha..."
        />

        <button className="btn-entrar" onClick={() => navigate('/listagem')}>
          ENTRAR
        </button>

        <a href="#" className="link-forgot">
          Esqueci meu login ou senha
        </a>

        <p className="cadastro-texto">
          Não possui conta?
          <a href="#" className="link-cadastro" onClick={(e) => { e.preventDefault(); navigate('/cadastro') }}>
            Faça o cadastro
          </a>
        </p>
      </div>
    </main>
  );
}
