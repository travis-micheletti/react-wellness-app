
import { useState } from 'react'
import styled from 'styled-components'

const PageHeader = styled.h1`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 50px;
    text-shadow: 3px 3px 3px white;
    box-shadow: 1px 1px 10px black
`

const Button = styled.button`
    width: 40vw;
    align-self: center;
    font-size: 30px;
    background: #212e42;
    color: rgb(184, 211, 211);
    border: solid white 10px;
    border-radius: 100px;
    box-shadow: 5px 5px 15px black;
`

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
            <PageHeader>Click to laugh!</PageHeader>
            <Button onClick={getJoke}>Get Joke</Button>
            <h4>{joke}</h4>
        </div>
    )
}

export default JokePage