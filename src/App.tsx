import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { increment, amountAdded } from './features/counter/counterSlice'
import logo from './logo.svg'
import './App.css'

function App() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(increment())
  }
  const amountAdd = () => {
    dispatch(amountAdded(2))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={amountAdd}>
            count is: {count} (click to add 2)
          </button>
          <button type="button" onClick={clickHandler}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
