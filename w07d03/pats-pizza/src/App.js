import './App.css';
import Header from './components/Header';
// import VisitorCounter from './components/VisitorCounter';
import Pizza from './components/Pizza';
import {useState} from 'react';

const App = () => {
  const [title, setTitle] = useState('Welcome to Pat\'s Pizza');

  return (
    <div className="App">
      {/* <h2>[ placeholder ]</h2> */}
      <Header title={title} showSubtitle={true} />

      {/* <VisitorCounter /> */}
      <Pizza />
    </div>
  );
};

export default App;
