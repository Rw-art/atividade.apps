
import React, { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Estudar React" },
    { id: 2, texto: "Fazer atividade" }
  ]);

  const [editandoId, setEditandoId] = useState(null);
  const [novoTexto, setNovoTexto] = useState("");

  function editar(tarefa) {
    setEditandoId(tarefa.id);
    setNovoTexto(tarefa.texto);
  }

  function salvar(id) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, texto: novoTexto }
          : tarefa
      )
    );

    setEditandoId(null);
    setNovoTexto("");
  }

  function cancelar() {
    setEditandoId(null);
    setNovoTexto("");
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {editandoId === tarefa.id ? (
              <>
                <input
                  value={novoTexto}
                  onChange={(e) => setNovoTexto(e.target.value)}
                />

                <button onClick={() => salvar(tarefa.id)}>
                  Salvar
                </button>

                <button onClick={cancelar}>
                  Cancelar
                </button>
              </>
            ) : (
              <>
                {tarefa.texto}

                <button onClick={() => editar(tarefa)}>
                  Editar
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
