import React, { useState } from "react";
import { Form } from "./style";

export default function FormLocal() {
  const [nome, setNome] = useState("");
  const [tarefa, setTarefa] = useState("");
  const [listaTarefa, setListaTarefa] = useState([]);

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };

  const onChangeTarefa = (event) => {
    setTarefa(event.target.value);
  };
  const guardarNome = () => {
    // console.log("guardei");
    localStorage.setItem("usuario", nome);
    setNome("");
  };
  const acessarNome = () => {
    // console.log("acessei");
    const user = localStorage.getItem("usuario");
    alert(user);
  };
  console.log(tarefa);
  const adicionarTarefa = () => {
    const novaLista = [...listaTarefa, tarefa];
    setListaTarefa(novaLista);
    setTarefa("");
  };

  const acessarTarefa = () => {};

  return (
    <Form>
      <h3>Prática 1</h3>
      <label htmlFor="nome">
        nome:
        <input onChange={onChangeNome} value={nome} name="nome" id="nome" />
      </label>
      <div>
        <button onClick={guardarNome}>Guardar Dados</button>
        <button onClick={acessarNome}>Acessar Dados</button>
        {/* <p>{nome}</p> */}
      </div>
      <br />
      <h3>Prática 2</h3>
      <label htmlFor="tarefa">
        tarefa:
        <input name="tarefa" id="tarefa" />
      </label>
      <button onClick={adicionarTarefa} type="button">
        adicionar Tarefa
      </button>
      <ul>
        {listaTarefa.map((task) => {
          return <li key={task}>{task}</li>;
        })}
      </ul>
      <div>
        <button>Guardar tarefa</button>
        <button>Acessar tarefa</button>
      </div>
    </Form>
  );
}
