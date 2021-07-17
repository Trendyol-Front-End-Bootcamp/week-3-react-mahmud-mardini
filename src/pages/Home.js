import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";
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
    <>
      <Navbar />
      <Filter apiUrl={apiUrl} setApiUrl={setApi} />
      {loading ? (
        <p>Loading..</p>
      ) : characters.error ? (
        <NotFound />
      ) : (
        <CharacterList characters={characters.results} />
      )}
    </>
  );
}

export default Home;
