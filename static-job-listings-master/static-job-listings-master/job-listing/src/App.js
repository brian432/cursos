import data from './data.json'
import './app.css'
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [state, setState] = useState([]);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    filter.length > 0 ? setState(filter) : setState(data)
  }, [])

  const handleClick = (e) => {
    setFilter([...state.filter(elemento => [...elemento.languages, ...elemento.tools, elemento.role, elemento.level].includes(e))])
  }

  const handleFilter = (e) => {
    setFilter([...filter, e])
  }
  return (
    <div className="App">
      {state.length > 0 ? <div>
        {
          state.map((obj, indice) =>
            <div className='cuadro' key={indice}>
              <div className='datos'>
                <div className='div-img'>
                  <img src={obj.logo} alt={obj.company} />
                </div>
                <div>
                  <p>{obj.company}</p>
                  <h3>{obj.position}</h3>
                </div>
              </div>
              <div className='lenguajes'>
                {
                  obj.languages.concat([...obj.tools, obj.role, obj.level]).map((elemento, indice) =>
                    <p key={indice} onClick={() => handleFilter(elemento)}>{elemento}</p>
                  )
                }
              </div>
            </div>
          )}</div> : <div></div>
      }
    </div>
  );
}

export default App;
