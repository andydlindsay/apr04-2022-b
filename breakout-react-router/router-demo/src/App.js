import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <h2>React Router Demo</h2>

      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/secret" element={<h2>This is the secret page! Shhhhhh!</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
