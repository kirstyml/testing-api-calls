import React, { useState, useEffect } from 'react';
import './App.css';
import { StarwarsPerson } from './starwars_person';
import { Person } from './person';

const App : React.FC = () => {
  const [person, setPerson] = useState<StarwarsPerson>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  useEffect(() => {
    getPerson();
  }, []);

  const getPerson = async () => {
    try {
      const apiResponse = await fetch(`https://swapi.dev/api/people`);
      switch (apiResponse.status) {
        case 200: {
          const json = await apiResponse.json() as { results: StarwarsPerson[] };
          const firstPerson = json.results[0];
          setPerson(firstPerson);
          break
        }
        case 500: {
          setErrorMessage("Oops something went wrong.....");
          break
        }
        case 418: {
          setErrorMessage("418 I'm a tea pot 🫖, silly");
          break
        }
      };

    }
    catch (error) {
      setErrorMessage("Something went wrong");
    }
  }

  return (
    <div className="App">
      <h1>Number 1 Star Wars Character:</h1>
      {person && <Person person={person} />}
      {errorMessage && <p>{`error: ${errorMessage}`}</p>}
    </div>
  );
}

export default App;
