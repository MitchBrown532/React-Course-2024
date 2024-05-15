// 1: import react & reactDOM & any components needed
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 2: Get a reference to the div with ID root
const el = document.getElementById('root')

// 3: Tell React to take control of that reference.
const root = ReactDOM.createRoot(el)

// 4: Show the component on the screen
root.render(<App />)