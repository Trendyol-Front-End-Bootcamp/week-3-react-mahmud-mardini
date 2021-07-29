import React, { useState } from 'react'

const Search = ({ getName, getGender, getStatus }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  // search for given name using (getName) and show input text using (setName)
  const onChangeName = (name) => {
    setName(name);
    getName(name);
  }

  // search for slected gender using (getGender) and show selected item using (setGender)
  const onChangeGender = (gender) => {
    setGender(gender);
    getGender(gender);

  }

  // search for given status using (getStatus) and show selected item using (setStatus)
  const onChangeStatus = (status) => {
    setStatus(status);
    getStatus(status);

  }

  return (
    <section className='search center'>
      <form>
        
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={name}
          onChange={(e) => onChangeName(e.target.value)}
          autoFocus
        />
        
        <select name="gender" value={gender} onChange={(e) => onChangeGender(e.target.value)}>
        <option key="" value="">Gender</option>
        <option key="female" value="female">Female</option>
        <option key="male" value="male">Male</option>
        <option key="genderless" value="genderless">Genderless</option>
        <option key="unknown" value="unknown">Unknown</option>
      </select>

      <select name="status" value={status} onChange={(e) => onChangeStatus(e.target.value)}>
        <option key="" value="">Status</option>
        <option key="alive" value="alive">Alive</option>
        <option key="dead" value="dead">Dead</option>
        <option key="unknown" value="unknown">Unknown</option>
      </select>

      </form>
    </section>
  )
}

export default Search
