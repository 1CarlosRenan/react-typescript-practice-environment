import { useCallback, useState } from "react";

function App() {
  const [user, setUser] = useState({ name: "João", category: "" });
  const [category, setCategory] = useState("developer");

  const updateName = useCallback(() => {
    setUser({ name: "Outro", category: category });
  }, []);

  return (
    <div className="App">
      <button onClick={updateName}>Alterar usuário para Outro nome</button>
      <button onClick={() => setCategory("QA")}>Alterar categoria</button>
      <p>Nome: {user.name}</p>
      <p>Categoria: {user.category}</p>
    </div>
  );
}

export default App;
