const todosKey = "reactTodo";

export const getLocalStorageData = () => {
    const rawTodo = localStorage.getItem(todosKey);
    if (!rawTodo) return [];
    return JSON.parse(rawTodo);
}

export const setLocalStorageData = (task) => {
    return localStorage.setItem(todosKey, JSON.stringify(task));
}