// src/UserInput.js
import React from 'react'
import {v4 as uuidv4} from 'uuid'

const UserInput = ({input, onRemove}) => (
  <li>
    {input.value} - {input.characterCount} characters
    <button onClick={() => onRemove(input.id)}>Remove</button>
  </li>
)

export default UserInput
