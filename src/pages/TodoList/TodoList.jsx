import './TodoList.css';
import { useState } from 'react';

function TodoList(){
    const [value, setValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(newTasks);
      };
      const handleAddTask = () => {
        if (inputValue.trim()) {
          setTasks([...tasks, inputValue]);
          setInputValue(""); // Limpa o campo após adicionar a tarefa
        }
      };
    
    return (
        <div className='TodoList'>
            <h2>Listar Tarefas</h2>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Digite a tarefa'></input>
            
            <button onClick={handleAddTask}>Adicionar</button>

    
            <ul>
                {tasks.map((task, index) => (
                <li key={index}>
                    {task} 
                    <button onClick={() => handleRemoveTask(index)}>Remover</button>
                </li>
                ))}
            </ul>
        </div>
  );
}


export default TodoList;

