import React, { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Estudar React" },
    { id: 2, texto: "Fazer atividade" }
  ]);

  function editarTarefa(id) {
    const novoTexto = prompt("Novo texto:");

    if (novoTexto && novoTexto.trim() !== "") {
      setTarefas(
        tarefas.map((tarefa) =>
          tarefa.id === id
            ? { ...tarefa, texto: novoTexto }
            : tarefa
        )
      );
    }
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.texto}

            <button onClick={() => editarTarefa(tarefa.id)}>
              Editar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;