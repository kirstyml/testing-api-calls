import { StarwarsPerson } from "./starwars_person"

interface PersonProps {
    person: StarwarsPerson
}

export const Person : React.FC<PersonProps> = ({ person }) => {
    return (
        <>
            <h2>{person.name}</h2>
            <p>Height: </p>
            <p>{person.height}</p>
        </>
    )
}