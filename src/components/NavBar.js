import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ListItem = styled.li`
  background: white;
  border-radius: 3px;
  border: none;
  color: black;
`

const HomeItem = styled(ListItem)`
    background: rgba(0, 255, 255, 0.798);
    color: white;
`

function NavBar () {
    return (
        <ul className='nav'>
            <Link to='/'><HomeItem>Home</HomeItem></Link>
            <Link to='/eat'><ListItem>Consume</ListItem></Link>
            <Link to='/study'><ListItem>Study</ListItem></Link>
            <Link to='/joke'><ListItem>Laugh</ListItem></Link>
            <Link to='/b/'><ListItem>Learn</ListItem></Link>
        </ul>
    
    )
}

export default NavBar