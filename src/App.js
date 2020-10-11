import React, {useState} from 'react'
import './App.css'

const App = () => {
  const [lista,setLista] = useState()
  const onKeyUp = (event) => {
    if(event.keyCode === 13){
      setLista(lista?lista.concat(event.target.value):[event.target.value])
      event.target.value = ""
    }
  }

  return (
    <div className="App">
      <p><input type="text" placeholder="Tarea a introducir" name="" id="" className="entrada" onKeyUp={onKeyUp}/></p>
      <ul className="lista">
        { lista && lista.map((item, index) => <li key={index}>{item}</li>) }
      </ul>
    </div>
  )
}

export default App
