import styled from 'styled-components'

export const PageHeader = styled.h1`
font-family: 'Lobster', cursive;
margin-top: 5vh;
font-size: 100px;
color: #001B3C;
text-shadow: 3px 3px 3px #89D6FF;
`

export const LogoPic = styled.img`

`

function Home () {
    return (
        <div className='component'>
            <LogoPic className='mainLogo' src='https://cdn.pixabay.com/photo/2015/07/13/07/32/icons-842853_960_720.png' alt='placeholder' />
            <PageHeader className='header'>respira</PageHeader>
        </div>
    )
}

export default Home