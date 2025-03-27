import React, { useState } from "react";
import { useTodoList } from "../hooks/useTodoList";

export default function MainTodo() {
    const [todo, setTodo] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    const { todoList, add, show, edit, del, check } = useTodoList();

    const addTodo = () => {
        if (!todo) return;
        add(todo);
        setTodo("");
    };

    const showTodo = (id) => {
        const currentTask = show(id);
        if (currentTask) {
            setTodo(currentTask);
            setIsEdit(true);
        }
    };

    const editTodo = () => {
        if (!todo) return;
        edit(todo);
        setIsEdit(false);
        setTodo("");
    };

    const deleteTodo = (id) => {
        setIsEdit(false);
        del(id);
    };

    const changeCheck = (id) => {
        check(id);
    };

    return (
        <div>
            <div>
                <input type="text" className="todo_input" placeholder="+ TODOを入力" value={todo} onChange={(e) => setTodo(e.target.value)} />
                {isEdit ? (
                    <button className="btn green" onClick={editTodo}>
                        変更
                    </button>
                ) : (
                    <button className="btn" onClick={addTodo}>
                        追加
                    </button>
                )}
            </div>

            <div className="box_list">
                {todoList.map((item) => (
                    <div className="todo_list" key={item.id}>
                        <div className={`todo ${item.checked ? "fin" : ""}`}>
                            <input type="checkbox" className="check" checked={item.checked} onChange={() => changeCheck(item.id)} />
                            <label>{item.task}</label>
                        </div>
                        <div className="btns">
                            <div className="btn green" onClick={() => showTodo(item.id)}>
                                編
                            </div>
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
