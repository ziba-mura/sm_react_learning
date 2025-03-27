import React, { useState } from "react";
import { useTodoList } from "../hooks/useTodoList";

export default function MainTodo() {
    const [todo, setTodo] = useState("");

    const { todoList, add, del } = useTodoList();

    const addTodo = () => {
        if (!todo) return;
        add(todo);
        setTodo("");
    };

    const deleteTodo = (id) => {
        del(id);
    };

    return (
        <div>
            <div>
                <input type="text" className="todo_input" placeholder="+ TODOを入力" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button className="btn" onClick={addTodo}>
                    追加
                </button>
            </div>

            <div className="box_list">
                {todoList.map((item) => (
                    <div className="todo_list" key={item.id}>
                        <div className={`todo`}>
                            <label>{item.task}</label>
                        </div>
                        <div className="btns">
                            <div className="btn green">編</div>
                            <div className="btn pink" onClick={() => deleteTodo(item.id)}>
                                削
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
