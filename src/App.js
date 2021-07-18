import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterList from './components/characters/CharacterList'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}&status=${status}`
      )

      setItems(result.data.results);
      setIsLoading(false);
    }

    fetchItems()
  }, [name, gender, status]);

  return (
    <div className='container'>
      
      <Header />
      
      <Search 
        getName={(name) => setName(name)} 
        getGender={(gender) => setGender(gender)} 
        getStatus={(status) => setStatus(status)}
       />

      <CharacterList isLoading={isLoading} characters={items} />
    </div>
  )
}

export default App
