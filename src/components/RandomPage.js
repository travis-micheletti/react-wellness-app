import { useState } from 'react'
import styled from 'styled-components'
    
    const RandomHeader = styled.h1`
    color: #004C73;
    font-family: 'Lobster', cursive;
    font-size: 50px;
    text-shadow: 3px 3px 3px #89D6FF;
    box-shadow: 1px 1px 14px #374955;
    margin-top: -15vh;
    `

    const FactButton = styled.button`
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

    const NewFact = styled.h5`
    font-size: 40px;
    max-height: 20vh;
    color: #212e42;
    overflow-x: hidden;
    overflow-y: auto;
    `
function RandomPage () {
    const [fact, setFact] = useState([])
    const [source, setSource] = useState([])

    const getFact = () => {
        const getFact = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://uselessfacts.jsph.pl//random.json?language=en", getFact)
            .then(res => res.json())
            .then(data => {
                setFact(data.text)
                setSource(data.source_url)
            })
            .catch(error => console.log('error', error));
        }

    return (
        <div className='component'>
            <RandomHeader>Learn Something New</RandomHeader>
            <FactButton onClick={getFact}>Learn!</FactButton>
            <NewFact>{fact}</NewFact>
        </div>
    )
}

export default RandomPage