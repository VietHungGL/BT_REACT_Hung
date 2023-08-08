import React from "react";

import AddTodo from "components/actionTodo/addTodo";

import ListTodo from "components/actionTodo/listTodo";
import Action from "components/actionTodo/action";

function TodoPage(props) {
  return (
    <div>
      <AddTodo />
      <ListTodo />
      <Action />
    </div>
  );
}

export default TodoPage;
