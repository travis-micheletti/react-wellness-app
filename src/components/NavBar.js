import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ListItem = styled.li`
  background: #004C73;
  border-radius: 5px;
  border: none;
  color: #9DE9FF;
  padding-left: 1vw;
  padding-right: 1vw;
`



function NavBar () {
    return (
        <ul className='nav'>
            <Link to='/'><ListItem>Home</ListItem></Link>
            <Link to='/eat'><ListItem>Consume</ListItem></Link>
            <Link to='/joke'><ListItem>Laugh</ListItem></Link>
            <Link to='/b/'><ListItem>Learn</ListItem></Link>
            <Link to='/study'><ListItem>Study</ListItem></Link>
        </ul>
    
    )
}

export default NavBar