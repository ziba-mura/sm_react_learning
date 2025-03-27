import React, { useState } from "react";

export default function MainTodo() {
    const [todo, setTodo] = useState("");

    const [todoList, setTodoList] = useState(() => {
        const ls = localStorage.getItem("todoList");
        return ls ? JSON.parse(ls) : [];
    });

    const addTodo = () => {
        if (!todo) return;
        const newTodo = {
            id: Date.now(),
            task: todo,
        };
        setTodoList((prev) => {
            const updated = [...prev, newTodo];
            return updated;
        });
        setTodo("");
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
                            <div className="btn pink">削</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
