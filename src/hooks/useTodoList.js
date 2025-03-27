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

    return { todoList, add };
}
