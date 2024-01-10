// src/UserInputList.js
import React from 'react'
import UserInput from '../UserInput'

const UserInputList = ({inputs, onRemove}) => (
  <ul>
    {inputs.map(input => (
      <UserInput key={input.id} input={input} onRemove={onRemove} />
    ))}
  </ul>
)

export default UserInputList
