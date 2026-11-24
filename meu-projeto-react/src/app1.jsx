import React from "react";

function ListaUsuarios() {
  const usuarios = [
    { id: 1, nome: "Ana", email: "ana@email.com" },
    { id: 2, nome: "Bruno", email: "bruno@email.com" },
    { id: 3, nome: "Carlos", email: "carlos@email.com" }
  ];

  return (
    <div>
      <h1>Lista de Usuários</h1>

      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nome} - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;