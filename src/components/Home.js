import styled from 'styled-components'

export const PageHeader = styled.h1`
color: #9DE9FF;
`

function Home () {
    return (
        <div className='component'>
            <img className='mainLogo' src='https://cdn.pixabay.com/photo/2015/07/13/07/32/icons-842853_960_720.png' alt='placeholder' />
            <PageHeader className='header'>&#91;React&#93;ual <br></br>h&#91;App&#93;iness</PageHeader>
            {/* <img className='mainLogo' src='https://cdn.pixabay.com/photo/2015/07/13/07/32/icons-842853_960_720.png' alt='placeholder' /> */}
        </div>
    )
}

export default Home