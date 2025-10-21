const LoginUser = async (email, password) => {
  try {
    const res = await fetch("http://localhost:3000/login");
    if (!res.ok) {
      throw new Error("erro no Login");
    }

    const users = await res.json();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error("email ou senha invalidos");
    }

    return user;
  } catch (err) {
    throw err.message || "Erro de requisição";
  }
};

export default LoginUser;
