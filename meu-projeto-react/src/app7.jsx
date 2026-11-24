
import React, { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionar() {
    if (input.trim() === "") {
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      texto: input
    };

    setTarefas([...tarefas, novaTarefa]);
    setInput("");
  }

  function remover(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
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

      <h2>Total: {tarefas.length}</h2>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.texto}
            <button onClick={() => remover(tarefa.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
