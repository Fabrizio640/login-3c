import { useNavigate } from 'react-router-dom'
import "./listagem.css";

const conteudos = [
  { id: 1, titulo: "Stranger Things", categoria: "Série", ano: 2016 },
  { id: 2, titulo: "Ozark", categoria: "Série", ano: 2017 },
  { id: 3, titulo: "Bird Box", categoria: "Filme", ano: 2018 },
  { id: 4, titulo: "The Witcher", categoria: "Série", ano: 2019 },
  { id: 5, titulo: "Extraction", categoria: "Filme", ano: 2020 },
];

export default function Listagem() {
  const navigate = useNavigate();

  return (
    <main>
      <div className="listagem-container">
        <div className="listagem-header">
          <h1 className="listagem-titulo">Catálogo</h1>
          <button className="btn-novo" onClick={() => navigate('/cadastro')}>+ Novo</button>
        </div>

        <table className="listagem-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Categoria</th>
              <th>Ano</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {conteudos.map((item) => (
              <tr key={item.id}>
                <td>{item.titulo}</td>
                <td>{item.categoria}</td>
                <td>{item.ano}</td>
                <td><button className="btn-acao btn-editar">📝</button></td>
                <td><button className="btn-acao btn-excluir">🗑️</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}