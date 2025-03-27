import { useState, useCallback } from "react";

export function useTodoList() {
    const [todoList, setTodoList] = useState(() => {
        const ls = localStorage.getItem("todoList");
        return ls ? JSON.parse(ls) : [];
    });

    const saveToLocalStorage = (todos) => {
        localStorage.setItem("todoList", JSON.stringify(todos));
    };

    const add = useCallback((task) => {
        const newTodo = {
            id: Date.now(),
            task,
        };
        setTodoList((prev) => {
            const updated = [...prev, newTodo];
            saveToLocalStorage(updated);
            return updated;
        });
    }, []);

    const show = useCallback(
        (id) => {
            editId.current = id;
            const found = todoList.find((todo) => todo.id === id);
            return found ? found.task : "";
        },
        [todoList]
    );

    const del = useCallback((id) => {
        setTodoList((prev) => {
            const found = prev.find((todo) => todo.id === id);
            if (!found) return prev;

            if (!window.confirm(`「${found.task}」を削除しますか`)) {
                return prev;
            }
            const updated = prev.filter((todo) => todo.id !== id);
            saveToLocalStorage(updated);
            return updated;
        });
    }, []);

    return { todoList, add, show, del };
}
