
import React, { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Estudar React", concluida: false },
    { id: 2, texto: "Fazer atividade", concluida: false }
  ]);

  function alternar(id) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => alternar(tarefa.id)}
            />

            <span
              style={{
                textDecoration: tarefa.concluida
                  ? "line-through"
                  : "none"
              }}
            >
              {tarefa.texto}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
