import { useState } from 'react'

function JokePage () {
    const [joke, setJoke] = useState([])

    const getJoke = () => {
        const getJoke = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://v2.jokeapi.dev/joke/Dark?blacklistFlags=political,racist,sexist&type=single", getJoke)
            .then(res => res.json())
            .then(data => setJoke(data.joke))
            .catch(error => console.log('error', error));
        }

    return (
        <div className='component'>
            <h1>JokePage component</h1>
            <button onClick={getJoke}>Get Joke</button>
            <h4>{joke}</h4>
        </div>
    )
}

export default JokePage