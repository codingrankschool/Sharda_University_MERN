import logo from './logo.svg';
import './App.css';

function App() {


  let count = 0

  function incrementFun(){
    alert("Somebody Clicked")
  }

  return (
    <div className="App">
        <h4>Counter Application</h4>
        <hr/>

        <p>Counter: 0</p>
        <button onClick={incrementFun}>Increment</button>
        <button>Decrement</button>
    </div>
  );
}

export default App;
