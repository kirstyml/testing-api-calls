import React, { useState, useEffect } from 'react';
import './App.css';
import { StarwarsPerson } from './starwars_person';
import { Person } from './person';

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
      <h1>Number 1 Star Wars Character:</h1>
      {person && <Person person={person} />}
    </div>
  );
}

export default App;
