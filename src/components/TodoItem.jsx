import React from 'react';
import styles from '../index.module.css';
import { useDispatch } from 'react-redux';
import { changeTodoStatus } from '../store/todoSlice';
import Button from '@mui/material/Button';



const TodoItem = ({todo}) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.list_item}>
      <input type='checkbox' onChange={()=>dispatch(changeTodoStatus(todo.id))} />
      <p className={todo.status ? styles.completed : styles.undone}>{todo.body}</p>
      <Button variant="contained" margin='5px'>Delete</Button>
      <Button variant="contained">Edit</Button>
    </li>
  )
}

export default TodoItem