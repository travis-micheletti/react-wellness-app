import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import EatPage from './components/EatPage';
import Home from './components/Home';
import JokePage from './components/JokePage';
import RandomPage from './components/RandomPage';
import StudyPage from './components/StudyPage';
import Welcome from './components/Welcome';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <nav> 
        <Link to='/home'>Home</Link>
        <Link to='/'>Welcome</Link>
        <Link to='/eat'>Eat</Link>
        <Link to='/study'>Study</Link>
        <Link to='/joke'>Joke</Link>
        <Link to='/b/'>Random</Link>
      
      </nav>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/eat' element={<EatPage />} />
        <Route path='/study' element={<StudyPage />} />
        <Route path='/joke' element={<JokePage />} />
        <Route path='/b/' element={<RandomPage />} />
        <Route path='/' element={<Welcome />} />
      </Routes>
      
      {/* <EatPage />
      <StudyPage />
      <JokePage />
      <RandomPage />
      <Nav /> */}
    </div>
  );
}

export default App;
