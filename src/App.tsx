
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Begin from './Pages/Begin';
import Game from './Pages/Game';
function App() {
  useEffect(function () {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  console.log(localStorage.getItem("theme"))
    localStorage.setItem("theme", "dark")
  })
  return (

    <div className="h-screen w-100 overflow-y-auto bg-white dark:bg-dark-bg ">
      <Routes >
        <Route path="/" element={<Begin />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
