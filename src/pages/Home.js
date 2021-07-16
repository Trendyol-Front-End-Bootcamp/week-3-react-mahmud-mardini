import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import CharacterList from "../components/CharacterList";

function Home({ apiUrl }) {
  const [api, setApi] = useState(apiUrl);
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [api]);

  return (
    <div>
      <Navbar />
      <Filter apiUrl={apiUrl} setApiUrl={setApi} />
      {loading ? (
        <p>Loading..</p>
      ) : (
        <>
          <CharacterList characters={characters.results} />
        </>
      )}
    </div>
  );
}

export default Home;
