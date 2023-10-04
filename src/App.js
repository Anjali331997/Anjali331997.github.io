import Header from './components/Header/Header';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import { Skills } from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import { GithubStats } from './components/Github/Github';
import Address from './components/Address/Address';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home />
        <About/>
        <Skills/>
        <Projects/>
        <GithubStats/>
        <Address/>
      </main>

    </div>
  );
}

export default App;
