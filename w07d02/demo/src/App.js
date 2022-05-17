import './App.css';
// import Basic from './components/Basic';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="App">
      <h2>React Demo</h2>

      {/*
        <Basic greeting="hello there" />
        <Basic greeting="this is the about page" />
      */}

      <Counter />    
    </div>
  );
};

export default App;
