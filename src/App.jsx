import { useSelector } from 'react-redux';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokeDetailPage from './pages/PokeDetailPage';
import PokedexPage from './pages/PokedexPage';

function App() {

  const trainer = useSelector( states => states.trainer); 

  console.log(trainer);

  return (
    <div>
      <h2> Pokedex </h2>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pokedex' element={<PokedexPage />} />
        <Route path='/pokedex/:name' element={<PokeDetailPage />} />
      </Routes>
    </div>
  )
}

export default App;
