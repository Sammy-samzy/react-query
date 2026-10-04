const todos = [
    { id: 1, title: "Learn HTML", completed: true },
    { id: 2, title: "Learn CSS", completed: true },
    { id: 3, title: "Learn JavaScript", completed: false },
    { id: 4, title: "Learn React", completed: false },
    { id: 5, title: "Learn React-Query", completed: false },
    { id: 6, title: "Learn TypeScript", completed: false }
];

export const FetchTodos = async (query="") => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Fetched Todos");

    const filteredTodos = todos.filter((todo) => 
        todo.title.toLowerCase().includes(query.toLowerCase())
    );
    return [...filteredTodos]
};

export const addTodo = async (todo)  => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newTodo = {
    id: todos.length + 1,
    title: todo.title,
    completed: false,
  };

  // Todo is stored in memory and cleared on page reload
  todos.push(newTodo);

  return newTodo;
};
