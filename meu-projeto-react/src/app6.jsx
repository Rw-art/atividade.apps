
import React, { useState } from "react";

function ListaDeNomes() {
  const [nomes, setNomes] = useState(["Ana", "Bruno"]);
  const [input, setInput] = useState("");

  function adicionar() {
    if (input.trim() === "") {
      return;
    }

    setNomes([...nomes, input]);
    setInput("");
  }

  function remover(index) {
    setNomes(nomes.filter((nome, i) => i !== index));
  }

  return (
    <div>
      <h1>Lista de Nomes</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite um nome"
      />

      <button onClick={adicionar}>Adicionar</button>

      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>
            {nome}
            <button onClick={() => remover(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeNomes;
