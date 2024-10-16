import { useEffect, useState,  } from "react";
import circle from "./../images/circle.svg";
import trash from "./../images/trash.svg";
import points from "./../images/dots-three-outline-vertical.svg";
import checkCircle from "./../images/check-circle.svg";
import copy from "./../images/copy.svg"
import pen from "./../images/pencil-simple-line.svg";
import { motion } from "framer-motion";
import im from './../images/reading-side.png'

const DoList = ({tasks, setTask}) => {
  const [inpValue, setInpValue] = useState('')
  const [showMenu, setShowMenu] = useState(null)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  const AddList = () => {
    const InpText = inpValue.trim();
    if (InpText) {
      setTask([...tasks, { text: InpText, completed: false }])
      setInpValue('');
    }
  }

  const completedTask = (index) => {
    const complTask = [...tasks]
    complTask[index].completed = !complTask[index].completed
    setTask(complTask)

  }

  const deleteTask = (index) => {
    const updateTask = tasks.filter((_, ind) => ind !== index)
    setTask(updateTask)
    console.log(updateTask)
  }

  const hiddenMenu = (index) => {
    setShowMenu(showMenu === index ? null : index)
  }
  return (
    <div className='task' >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="add-task">
        <input id='TaskInput' type="text" placeholder='Add your task' onChange={(e) => setInpValue(e.target.value)} value={inpValue} />
        <button id='AddBtn' onClick={AddList}>Add</button>
      </motion.div>
    {tasks.length > 0 ? (
      <ul className="TaskList">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <div className="task-div">
              <button onClick={() => completedTask(index)}><img src={task.completed ? checkCircle : circle} alt="circle" className="circle-img" /></button>
              <span>{task.text}</span>
            </div>

            <div className="options-btn" >
              <button onClick={() => deleteTask(index)}><img src={trash} alt="delete" className="trash-img" /></button>
              <button onClick={() => hiddenMenu(index)}><img src={points} alt="points" className="points-img" /></button>
              {showMenu === index && (
                <div className="hidden-menu">

                  <ul>
                    <li>
                      <button>
                        <img src={copy} alt="copy" /> <span>Copy</span>
                      </button>
                    </li>
                    <li>
                      <button>
                        <img src={pen} alt="edit" /> <span>Edit</span>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>



          </li>
        ))}
      </ul>)
      : (
        <div className="lack-of-task">
          <img src={im} alt="lack-of-task-img" />
          <span>Write some task or note ;)</span>
        </div>

      )
}
    </div>
      
  )


}


export default DoList;



