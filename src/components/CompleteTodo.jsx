export const CompleteTodo = (props) => {
  const { todos, onClickBack, onClickDelete, disabled } = props;
  return (
    <div className="complete-area">
      <p className="complete-title">完了のToDo</p>
      <ul>
        {todos.map((todo, index) => (
          <li key="todo">
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button disabled={disabled} onClick={() => onClickBack(index)}>
                戻す
              </button>
              <button onClick={() => onClickDelete(index, "complete")}>
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
