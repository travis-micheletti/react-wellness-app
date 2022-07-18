import { useState } from 'react'

function RandomPage () {
    const [fact, setFact] = useState([])

    const getFact = () => {
        const getFact = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://asli-fun-fact-api.herokuapp.com", getFact)
            .then(res => res.json())
            .then(data => setFact(data.data.fact))
            .catch(error => console.log('error', error));
        }

    return (
        <div className='component'>
            <h1>RandomPage component</h1>
            <button onClick={getFact}>Get a Random Fact!</button>
            <h4>{fact}</h4>
        </div>
    )
}

export default RandomPage