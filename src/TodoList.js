import {useState} from "react";
import {useTodoList, useAuthState} from "./data";
import './App.css';

function TodoList() {
    const [todos, updateTodos] = useTodoList();
    const [auth, updateAuthState] = useAuthState();

    const [nextItemText, setNewItemText] = useState("");

    function handleTextChange(event) {
        setNewItemText(event.target.value);
    }

    function addNewtodo() {
        todos.push({
            id: todos.length + 1,
            note: nextItemText
        });
        updateTodos(todos);
    }

    function login() {
        auth.loggedIn = true;
        auth.userName = "asanga";
        updateAuthState(auth);
    }

    function logout() {
        auth.loggedIn = false;
        auth.userName = "";
        updateAuthState(auth);
    }

    function deleteItem(index) {
        updateTodos(todos.filter((item) => item.id !== index));
    }

    return (
        <div className="border-solid border-2 flex  border-sky-500 m-1 p-5 flex-col justify-items-stretch">
            <span className="text-xl underline">TodoList component</span>
            {!!todos && todos.length > 0 && (
                <div className="border-solid border-2 m-1">
                    <ul>
                        {todos.map((item, i) => <ListItem item={item} deleteCb={deleteItem}/>)}
                    </ul>
                </div>
            )}
            <div className="border-solid border-2 m-1">
                <input className="border-solid border-2 border-sky-500 m-1 p-5" type="text"
                       onChange={handleTextChange}></input>
                <button className="border-solid border-2 border-sky-500 m-1 p-5" onClick={addNewtodo}>Add</button>
            </div>
            <div className="border-solid border-2 m-1">
                <button className="border-solid border-2 border-sky-500 m-1 p-5" onClick={login}>login</button>
                <button className="border-solid border-2 border-sky-500 m-1 p-5" onClick={logout}>logout</button>
            </div>
        </div>
    );
}

const ListItem = ({item, deleteCb}) => (
    <li className="m-1" key={item.id}>
        <span className="border-solid border-2 border-sky-500 p-5 w-10"> {item.note} </span>
        <button className="m-5" onClick={() => deleteCb(item.id)}>❌</button>
    </li>
)

export default TodoList;
