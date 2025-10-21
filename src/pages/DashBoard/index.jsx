import { useAuth } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";

const Dashboard = () => {
  const { logout } = useAuth();

  const { data: itens } = useFetch("http://localhost:3000/produtos");

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };
  return (
    <div>
      <h1>Produtos em estoque</h1>
      <ul>
        {itens &&
          itens.map((product) => (
            <li key={product.id}>
              Produto: {product.produto} — preço: R${product.preco}
            </li>
          ))}
      </ul>
      <button onClick={handleLogout}>sair</button>
    </div>
  );
};

export default Dashboard;
