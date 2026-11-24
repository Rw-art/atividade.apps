
import React, { useState } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Bruno" }
  ]);

  // O useState é necessário porque, quando alteramos o estado,
  // o React renderiza a tela novamente.
  // Uma variável comum não avisa ao React quando sofre alterações.

  return (
    <div>
      <h1>Usuários</h1>

      {usuarios.map((usuario) => (
        <p key={usuario.id}>{usuario.nome}</p>
      ))}
    </div>
  );
}

export default App;
