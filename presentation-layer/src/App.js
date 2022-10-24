import ParticlesComponent from './components/Particles';
import './App.css';
import Welcome from './containers/Welcome/Welcome';

function App() {
  return (
    <main className='main-container'>
      <ParticlesComponent />
      <Welcome />
    </main>
  );
}

export default App;
