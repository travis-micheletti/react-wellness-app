
import { useState } from 'react'
import styled from 'styled-components'

const PageHeader = styled.h1`
    color: #004C73;
    font-family: 'Lobster', cursive;
    font-size: 50px;
    text-shadow: 3px 3px 3px #89D6FF;
    box-shadow: 1px 1px 14px #374955;
    margin-top: -15vh;
  
`

 export const Button = styled.button`
    width: 40vw;
    align-self: center;
    font-size: 30px;
    background: #212e42;
    color: rgb(184, 211, 211);
    border: solid white 10px;
    border-radius: 100px;
    box-shadow: 5px 5px 15px black;
    cursor: pointer;
`

const Punchline = styled.h5`
    font-size: 40px;
    max-height: 25vh;
    color: #212e42;
    transition-duration: 500ms;
    transition-delay: 100ms;
    overflow-x: hidden;
    overflow-y: auto;
    text-shadow: 1px 1px 1px #89D6FF;
`

function JokePage () {
    const [joke, setJoke] = useState([])

    const getJoke = () => {
        const getJoke = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=single", getJoke)
            .then(res => res.json())
            .then(data => setJoke(data.joke))
            .catch(error => console.log('error', error));
        }

    return (
        <div className='component'>
            <PageHeader>Need a Laugh?</PageHeader>
            <Button onClick={getJoke}>Laugh!</Button>
            <Punchline>{joke}</Punchline>
        </div>
    )
}

export default JokePage