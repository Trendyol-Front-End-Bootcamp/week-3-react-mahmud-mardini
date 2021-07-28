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
  const BASE_API_URL = `https://rickandmortyapi.com/api/character/`;

  useEffect(() => {

    // fetch characters function
    const fetchCharacters = async () => {
      
      // set loading as true while characters not yet have fetched completely
      setIsLoading(true);

      // store fetched characters data in result variable  
      const result = await axios(
        BASE_API_URL + `?name=${name}&gender=${gender}&status=${status}`
      );

      // assign results to items
      setItems(result.data.results);

      // stop loading when data fetched successfully
      setIsLoading(false);
    }

    // call fetchCharacters function
    fetchCharacters();

    // get search variables using 'useEffect'
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
