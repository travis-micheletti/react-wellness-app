import './App.css';
import { Route, Routes } from 'react-router-dom'
import EatPage from './components/EatPage';
import Home from './components/Home';
import JokePage from './components/JokePage';
import RandomPage from './components/RandomPage';
import StudyPage from './components/StudyPage';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/eat' element={<EatPage />} />
        <Route path='/study' element={<StudyPage />} />
        <Route path='/joke' element={<JokePage />} />
        <Route path='/b/' element={<RandomPage />} />
        <Route path='/' element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
