import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todoSlice'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



const AddTodo = () => {
    //мы не можем просто использовать 
    //useDispatch - возвращает диспетчера который знает какой есть стор и что нужно с ним сдедать
    const [todoContent, setTodoContent] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function createToDo(){
        if(!todoContent.trim()) return alert('Input is empty!');
        let newTodo = {
            id: Date.now(),
            body: todoContent,
            status: false
        }
        dispatch(addTodo(newTodo));
        setTodoContent('')
        navigate('/')
    }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h3>Create TODO</h3>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" type="text" onChange={e => setTodoContent(e.target.value)} value={todoContent} />
      <Button onClick={()=>createToDo()} variant="contained">Add</Button>
    </Box>
  )
}

export default AddTodo

