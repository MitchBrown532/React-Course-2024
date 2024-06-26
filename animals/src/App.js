import './App.css'
import { useState } from "react"
import AnimalShow from './AnimalShow'

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
    const [animals, setAnimals] = useState([]);


    const handleClick = () => {
        //Dont do animals.push(getRandomAnimal())
        //NEVER modify a state without using the setter
        setAnimals([...animals, getRandomAnimal()])
        console.log(animals)
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

    return (
        <div className='app'>
            <button onClick={handleClick}> Add Animal</button>
            <div className='animal-list'>{renderedAnimals}</div>
        </div>
    )
}

export default App