export const IncompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="incomplete-title">未完了のToDo</p>
      <ul>
        {/* {incompleteTodos.map((todo) => {
        return (
          // <li key="todo"> key:一意になる項目を指定
          <li key="todo">
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        );
      })} */}
        {/* シンプルな書き方 */}
        {todos.map((todo, index) => (
          // <li key="todo"> key:一意になる項目を指定
          <li key="todo">
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* <button onClickDelete={onClickDelete(index)}>削除</button> */}
              {/* 引数を渡して関数を呼ぶ際の記載 */}
              <button onClick={() => onClickDelete(index, "incomplete")}>
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
