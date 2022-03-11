
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Game from './Pages/Game';
function App() {
  
  return (

    <div className="h-screen w-100 overflow-y-auto bg-white dark:bg-dark-bg overflow-x-hidden">
      <Routes >
        <Route path="*" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
