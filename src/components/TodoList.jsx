import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import styles from '../index.module.css';

const TodoList = () => {
    //useSelector принимает функцию, содержит весь стор со всеми слайсами
    const {todos} = useSelector(state => state.todos)
  return (
    <div>
        <ul className={styles.list}>
            {todos.map(todo =>(
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    </div>
  )
}

export default TodoList

