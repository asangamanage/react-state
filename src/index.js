import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './TodoList';
import {Header} from "./Header";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className="container mx-auto">
            <Header/>
            <TodoList/>
        </div>
    </React.StrictMode>
);

