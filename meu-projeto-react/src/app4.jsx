
import React, { useState } from "react";

function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionar() {
    const novaTarefa = {
      id: Date.now(),
      texto: input
    };

    setTarefas([...tarefas, novaTarefa]);
    setInput("");
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite uma tarefa"
      />

      <button onClick={adicionar}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.texto}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;
