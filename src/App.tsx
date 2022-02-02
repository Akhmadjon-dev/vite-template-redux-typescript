import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { increment, amountAdded } from './features/counter/counterSlice';
import { useFetchBreedsQuery } from './features/dogs/dogsApiSlice';
import logo from './logo.svg'
import './App.css'

function App() {
  const count = useAppSelector(state => state.counter.value)
  const [numDogs, setNumDogs] = useState(10)
  const dispatch = useAppDispatch();

  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

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
        
        <div>
          <p>Dogs to fetch:</p>
          <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))} name="" id="">
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>

        <div>
          <p>Number of dogs fetched: {data.length}</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(breed => (
                  <tr key={breed.id}>
                    <td>
                      {breed.name}
                    </td>
                    <td>
                      <img src= {breed.image.url} alt="" height={250}/>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        
      </header>
    </div>
  )
}

export default App
