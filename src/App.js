import Home from './components/Home.jsx';
import s from './components/styles/App.module.css';

function App() {
  return (
    <div className={s.container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230">
        <path fill="#0099ff" opacity="0.3" d="M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
        </path>
      </svg>
      <Home/>
    </div>

  );
}

export default App;
