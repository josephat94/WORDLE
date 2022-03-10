
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Begin from './Pages/Begin';
import Game from './Pages/Game';
function App() {
  return (

    <div className="h-screen w-100 overflow-y-auto ">
      <Routes >
        <Route path="/" element={<Begin />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
