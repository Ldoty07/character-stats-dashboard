import { useState } from 'react'

import './App.css'

import Header from './components/Header'
import CreateCharacter from './components/CreateCharacter'
import Dashboard from './components/Dashboard'

function App() {
  const [characters, addCharacter] = useState([]);

  return (
    <main id='container'>
      <Header />
      <CreateCharacter characters={characters} characterData={addCharacter} />
      <Dashboard characters={characters} characterData={addCharacter} />
    </main>
  )
}

export default App
