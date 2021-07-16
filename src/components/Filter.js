import React, { useState } from "react";
import "./../styles/styles.css";


function Filter({apiUrl,setApiUrl}) {
  const [queries, setQueries] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if(Object.values(queries).some(q => q.length > 0)) {
      const query = Object.keys(queries).reduce(
        (acc, curr, i, arr) => {
          if (queries[curr]) {
            acc += `${curr}=${queries[curr]}&`;
          }
          if (!arr[i + 1]) {
            acc = acc.substr(0, acc.length - 1);
          }
          return acc;
        }, "");

      setApiUrl(`${apiUrl}?${query}`);
    } else {
      setApiUrl(apiUrl);
    } 
  };

  const handleChange = (e) => {
    setQueries({ ...queries, [e.target.name]: e.target.value });
  };

  return (
    <>
    <hr/>
      <form onSubmit={handleSubmit} className="search-box">
        <input
          name="name"
          type="text"
          value={queries.name}
          onChange={handleChange}
          placeholder="Enter a character name"
        />

      <select name="gender" value={queries.gender} onChange={handleChange}>
        <option key="" value="">Select a gender</option>
        <option key="female" value="female">Female</option>
        <option key="male" value="male">Male</option>
        <option key="genderless" value="genderless">Genderless</option>
        <option key="unknown" value="unknown">Unknown</option>
      </select>

      <select name="status" value={queries.status} onChange={handleChange}>
        <option key="" value="">Select a status</option>
        <option key="alive" value="alive">Alive</option>
        <option key="dead" value="dead">Dead</option>
        <option key="unknown" value="unknown">Unknown</option>
      </select>

      <input type="submit" value="Search" />
    </form>
    </>
  );
}

export default Filter;

