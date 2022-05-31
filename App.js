import './App.css';
import Navbar from './components.js/Navbar';
import Question from './components.js/Question';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Question/>
      <Question/>
      <Question/>
    </div>
  );
}

export default App;
