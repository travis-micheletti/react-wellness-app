import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import EatPage from './components/EatPage';
import Home from './components/Home';
import JokePage from './components/JokePage';
import RandomPage from './components/RandomPage';
import StudyPage from './components/StudyPage';

function App() {

  return (
    <div className="App">
      <nav> 
        <Link to='/'>Home</Link>
        <Link to='/eat'>Consume</Link>
        <Link to='/study'>Study</Link>
        <Link to='/joke'>Laugh</Link>
        <Link to='/b/'>Learn</Link>
      
      </nav>
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
