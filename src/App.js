import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement, signIn} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Hello {counter}</h1>
      {isLogged ? <h3>Logged in</h3>: <h3>Logged out</h3>}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(signIn())}>signIn</button>
    </div>
  );
}

export default App;
