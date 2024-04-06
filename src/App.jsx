import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokeDetailPage from './pages/PokeDetailPage';
import PokedexPage from './pages/PokedexPage';
import ProtectedRoutes from './pages/ProtectedRoutes';
import './index.css';

function App() {

  


  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<PokedexPage />} />
          <Route path='/pokedex/:name' element={<PokeDetailPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;

