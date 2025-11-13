import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleClick = () => {navigate.push("/components/Granadillo.jsx")}

  return (
    <div className="App">
      <h1>Luquinho</h1>
      <button onClick={handleClick}>Granadillo</button>
    </div>
  );
}

export default App;
