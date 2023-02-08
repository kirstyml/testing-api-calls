import React, { useState, useEffect } from 'react';
import './App.css';
import { StarwarsPerson } from './starwars_person';

const App : React.FC = () => {
  const [person, setPerson] = useState<StarwarsPerson>();

  useEffect(() => {
    getPerson();
  }, []);

  const getPerson = async () => {
    const apiResponse = await fetch(`https://swapi.dev/api/people`);
    const json = await apiResponse.json() as { results: StarwarsPerson[] };
    const firstPerson = json.results[0];
    setPerson(firstPerson);
  }

  return (
    <div className="App">
      {person && <p>{person.name}</p>}
    </div>
  );
}

export default App;
