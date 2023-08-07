import React from "react";

import AddTodo from "components/actionTodo/addTodo";

import ListTodo from "components/actionTodo/listTodo";

function TodoPage(props) {
  return (
    <div>
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default TodoPage;
