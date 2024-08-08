import { useState} from 'react'
import './App.css'
import Addtask from './components/Addtask'
import Container from './components/Container'
import Footer from './components/Footer'
import List from './components/List'




const color = {
  color: "black",
  borderRadius: "1px solid",
  border: "none",
  outline: "none",
  backgroundColor: "wheat",
  padding: "0.5rem 0",

}
function App() {
  const [ tasks , setTasks] = useState([])
  const [name, setName] = useState('')
  



  const handleAddTask=(name,id)=>{
    const newTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    setTasks([
       ...tasks,
      {
  id: newTaskId,
  task:name,
  priority:"",
  isEditing:false,
      }
    ])
    setName('')
  }
 
  const handleEditTask = (taskid,taskvalue) => {
   setTasks(tasks.map(t=> t.id === taskid?{
    ...t,
    task:taskvalue,
   }:t
   ))
  }


  function handleChangeTask(task) {
  
    setTasks(tasks.map(t => t.id === task.id ?
       { ...t, isEditing: !t.isEditing } : t));
  }

  const handleDeleteTask = (task) => {
    const newArray = 
    tasks.filter(t => t.id !== task.id);
    setTasks(newArray);
  };


  function handleselection(e, task) {
    const newPriority = e.target.value;
    setTasks(
      tasks.map(t =>
        t.id === task.id ? { ...task, priority: newPriority } : t
      )
    );
    
  }



  return (
    <>
    <Container>
      <Addtask handleAddTask={handleAddTask} color={color} name={name} setName={setName} />
      <List tasks={tasks} 
      color={color}   
       onChangeTask={handleChangeTask} 
       handleDeleteTask={handleDeleteTask}
       handleselection={handleselection}
         handleEditTask={handleEditTask}
      />
       
    </Container>
    <Footer/> 
    </>
  )
}

export default App
