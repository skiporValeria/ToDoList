import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import InitialPage from "./components/InitialPage";
import "./styles/App.css";
import DoList from "./components/DoList";
import Header from "./components/Header"
import React, { useState, useEffect } from 'react';


function App() {
  const [tasks, setTask] = useState(() => {
    // Завантажуємо таски з localStorage при першому рендері
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const navigate = useNavigate();

  // Зберігаємо таски в localStorage при кожній зміні tasks
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const deleteList = () => {
    setTask([]);
    localStorage.removeItem('tasks'); // Очищаємо tasks з localStorage при видаленні
    navigate('/');
  };

  return (
    <div className="App">
      <div className="container">
        <Header deleteList={deleteList}/>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/List" element={<DoList tasks={tasks} setTask={setTask}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
