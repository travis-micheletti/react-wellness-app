import styled from 'styled-components'

export const PageHeader = styled.h1`
color: #004C73;
`

export const LogoPic = styled.img`

`

function Home () {
    return (
        <div className='component'>
            <LogoPic className='mainLogo' src='https://cdn.pixabay.com/photo/2015/07/13/07/32/icons-842853_960_720.png' alt='placeholder' />
            <PageHeader className='header'>&#91;React&#93;ual <br></br>h&#91;App&#93;iness</PageHeader>
        </div>
    )
}

export default Home