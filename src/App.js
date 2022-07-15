import logo from './logo.svg';
import './App.css';
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
      <nav></nav>
      <Welcome />
      <Home />
      <EatPage />
      <StudyPage />
      <JokePage />
      <RandomPage />
      <Nav />
    </div>
  );
}

export default App;
