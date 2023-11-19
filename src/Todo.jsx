import { useState } from "react";
import { InputTodo } from "./components/InpuTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";
import "./styles.css";

export const Todo = () => {
  // 入力したTodoを保持
  const [todoText, setTodoText] = useState("");
  // 未完了のTodoを保持
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  // 完了のTodoを保持
  const [completeTodos, setCompleteTodos] = useState([]);

  // 入力されたTodoを取得して、todoTextにセット
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 入力したTodoを追加ボタン押下で未完了のTodoに追加する
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  // 削除ボタン：未完了、完了リストからTodoを削除
  const onClickDelete = (index, list) => {
    if (list === "incomplete") {
      const newTodos = [...incompleteTodos];
      newTodos.splice(index, 1); // 配列内の特定の値を削除する
      setIncompleteTodos(newTodos);
    } else {
      const newTodos = [...completeTodos];
      newTodos.splice(index, 1); // 配列内の特定の値を削除する
      setCompleteTodos(newTodos);
    }
  };
  // 完了ボタン：未完了のリストからTodoを削除、完了リストに追加
  const onClickComplete = (index) => {
    // const newIncompleteTodos = [...incompleteTodos];
    // newIncompleteTodos.splice(index, 1);
    // setIncompleteTodos(newIncompleteTodos);
    onClickDelete(index, "incomplete");

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };
  // 戻すボタン：完了のリストからTodoを削除、未完了リストに追加
  const onClickBack = (index) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1); // 配列内の特定の値を削除する
    setCompleteTodos(newTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    // コンポーネント化
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxLimitIncompleteTodos}
      />
      {isMaxLimitIncompleteTodos && (
        <p style={{ color: "red", height: "1px" }}>ToDoは最大５件</p>
      )}
      ;
      <IncompleteTodo
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo
        todos={completeTodos}
        onClickBack={onClickBack}
        onClickDelete={onClickDelete}
        disabled={isMaxLimitIncompleteTodos}
      />
    </>

    // // コンポーネント化前
    // <>
    //   <div className="input-area">
    //     <input
    //       placeholder="ToDoを入力"
    //       value={todoText}
    //       onChange={onChangeTodoText}
    //     />
    //     <button onClick={onClickAdd}>追加</button>
    //   </div>
    //   <div className="incomplete-area">
    //     <p className="incomplete-title">未完了のToDo</p>
    //     <ul>
    //       {/* {incompleteTodos.map((todo) => {
    //         return (
    //           // <li key="todo"> key:一意になる項目を指定
    //           <li key="todo">
    //             <div className="list-row">
    //               <p className="todo-item">{todo}</p>
    //               <button>完了</button>
    //               <button>削除</button>
    //             </div>
    //           </li>
    //         );
    //       })} */}
    //       {/* シンプルな書き方 */}
    //       {incompleteTodos.map((todo, index) => (
    //         // <li key="todo"> key:一意になる項目を指定
    //         <li key="todo">
    //           <div className="list-row">
    //             <p className="todo-item">{todo}</p>
    //             <button onClick={() => onClickComplete(index)}>完了</button>
    //             {/* <button onClickDelete={onClickDelete(index)}>削除</button> */}
    //             {/* 引数を渡して関数を呼ぶ際の記載 */}
    //             <button onClick={() => onClickDelete(index, "incomplete")}>
    //               削除
    //             </button>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    //   <div className="complete-area">
    //     <p className="complete-title">完了のToDo</p>
    //     <ul>
    //       {completeTodos.map((todo, index) => (
    //         <li key="todo">
    //           <div className="list-row">
    //             <p className="todo-item">{todo}</p>
    //             <button onClick={() => onClickBack(index)}>戻す</button>
    //             <button onClick={() => onClickDelete(index, "complete")}>
    //               削除
    //             </button>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </>

    //// htmlイメージ
    // <>
    //   <div className="input-area">
    //     <input placeholder="ToDoを入力" />
    //     <button>追加</button>
    //   </div>
    //   <div className="incomplete-area">
    //     <p className="incomplete-title">未完了のToDo</p>
    //     <ul>
    //       <li>
    //         <div className="list-row">
    //           <p className="todo-item">ToDoです</p>
    //           <button>完了</button>
    //           <button>削除</button>
    //         </div>
    //       </li>
    //       <li>
    //         <div className="list-row">
    //           <p className="todo-item">ToDoです</p>
    //           <button>完了</button>
    //           <button>削除</button>
    //         </div>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="complete-area">
    //     <p className="complete-title">完了のToDo</p>
    //     <ul>
    //       <li>
    //         <div className="list-row">
    //           <p className="todo-item">ToDoでした</p>
    //           <button>戻す</button>
    //           <button>削除</button>
    //         </div>
    //       </li>
    //       <li>
    //         <div className="list-row">
    //           <p className="todo-item">ToDoでした</p>
    //           <button>戻す</button>
    //           <button>削除</button>
    //         </div>
    //       </li>
    //     </ul>
    //   </div>
    // </>
  );
};
