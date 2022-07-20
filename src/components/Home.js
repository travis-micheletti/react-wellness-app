import styled from 'styled-components'

export const PageHeader = styled.h1`
color: #212e42;
`

function Home () {
    return (
        <div className='component'>
            <PageHeader className='header'>&#91;React&#93;ual <br></br>h&#91;App&#93;iness</PageHeader>
            <img className='mainLogo' src='https://cdn.pixabay.com/photo/2016/04/01/09/33/anatomy-1299434_1280.png' alt='placeholder' />
        </div>
    )
}

export default Home