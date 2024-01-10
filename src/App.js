// src/App.js
import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'
import UserInputList from './components/UserInputList'

const App = () => {
  const [userInput, setUserInput] = useState('')
  const [userInputs, setUserInputs] = useState([])

  const handleInputChange = e => {
    setUserInput(e.target.value)
  }

  const handleAddInput = e => {
    e.preventDefault()

    if (userInput.trim() !== '') {
      const newInput = {
        id: uuidv4(),
        value: userInput,
        characterCount: userInput.length,
      }

      setUserInputs(prevInputs => [...prevInputs, newInput])
      setUserInput('')
    }
  }

  const handleRemoveInput = id => {
    setUserInputs(prevInputs => prevInputs.filter(input => input.id !== id))
  }

  return (
    <div className="App">
      <h1>Count the characters like a Boss</h1>
      <form onSubmit={handleAddInput}>
        <label>
          Enter text:&nbsp;
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Enter the Characters here"
          />
        </label>
        <button type="submit">Add</button>
      </form>
      {userInputs.length > 0 && (
        <p>New user input added: {userInputs[userInputs.length - 1].value}</p>
      )}
      {userInputs.length > 0 ? (
        <UserInputList inputs={userInputs} onRemove={handleRemoveInput} />
      ) : (
        <>
          <img src="https://via.placeholder.com/150" alt="no user inputs" />
          <h1>Character Counter</h1>
        </>
      )}
    </div>
  )
}

export default App
