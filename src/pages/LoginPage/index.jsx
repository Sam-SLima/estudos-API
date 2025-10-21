import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Input from "../../components/Input";
import LoginUser from "../../services/auth";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email obrigatório");
      return;
    }
    if (!password) {
      setError("Senha obrigatória");
      return;
    }
    setLoading(true);

    try {
      const data = await LoginUser(email, password);
      login(data.user, data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input
          label="Email"
          type="text"
          placeholder="Digite o email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="digite a senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{error}</p>}
        <button type="submit">{loading ? "Entrando..." : "Entrar"}</button>
      </form>
    </div>
  );
};

export default LoginPage;
