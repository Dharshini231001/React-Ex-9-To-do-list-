import './App.css';



import Demo from './functional.js';
import Todolist from './todo.js';
function App() {
  return (  
    <div className="App">
      <header className="App-header">
        <Demo/>
        <Todolist />

      </header>
    </div>
  );
}

export default App;