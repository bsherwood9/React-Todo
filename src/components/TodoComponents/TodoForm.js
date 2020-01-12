import React from "react";
import { tsPropertySignature } from "@babel/types";

const TodoForm = props => {
  return (
    <form>
      <label for="todo">Todos</label>
      <input name="todo" type="text" value={props.name} />
      <button>Add to Do</button>
      <button>Clear Complete</button>
    </form>
  );
};

export default TodoForm;
