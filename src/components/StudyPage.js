import styled from 'styled-components'

const StudyHeader = styled.h1`
font-family: 'Nunito Sans', sans-serif;
    font-size: 50px;
    text-shadow: 3px 3px 3px white;
    box-shadow: 1px 1px 10px black;
`

function StudyPage () {
    return (
        <div className='component'>
            <StudyHeader>Study in Peace</StudyHeader>
            <iframe 
            width="auto" 
            height="400" 
            src="https://www.youtube.com/embed/jfKfPfyJRdk" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
            ></iframe>
        </div>
    )
}

export default StudyPage