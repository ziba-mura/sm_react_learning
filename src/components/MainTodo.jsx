import React, { useState } from "react";

export default function MainTodo() {
    const [todo, setTodo] = useState("");
    return (
        <div>
            <div>
                <input type="text" className="todo_input" placeholder="+ TODOを入力" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button className="btn">追加</button>
                <p>{todo}</p>
            </div>
        </div>
    );
}
