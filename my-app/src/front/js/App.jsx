import '../styles/App.css';
import fondo from "../assets/fondo.png"
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './component/navbar';
import Home from './pages/home'
function StarContainer() {
  const stars = [];

  for (let i = 0; i < 10; i++) {
    stars.push(<span className='star' key={i}></span>);
  }

  return (
    <div className='star-container'>
      {stars}
    </div>
  );
}

function App() {
  return (
    <div className='container mt-5 vh-100'>
    <Router>
      <section className='mt-1 me-5'>
      <StarContainer/>
      </section>
      <Navbar/>
      <Home/>
    </Router>
    </div>
  );
}


export default App;
