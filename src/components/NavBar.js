import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ListItem = styled.li`
  background: #004C73;
  border-radius: 5px;
  border: 2px solid #9DE9FF;
  color: #9DE9FF;
  padding-left: 1vw;
  padding-right: 1vw;
  padding-top: 1vh;
  
`



function NavBar () {
    return (
        <div className='navspace'>
            <ul className='nav'>
            <Link to='/'><ListItem><i className="fa-solid fa-house"></i></ListItem></Link>
            <Link to='/eat'><ListItem><i className="fa-solid fa-pizza-slice"></i></ListItem></Link>
            <Link to='/joke'><ListItem><i className="fa-solid fa-face-grin-tears"></i></ListItem></Link>
            <Link to='/b/'><ListItem><i className="fa-solid fa-graduation-cap"></i></ListItem></Link>
            <Link to='/study'><ListItem><i className="fa-solid fa-headphones"></i></ListItem></Link>
        </ul>
        </div>
        
    
    )
}

export default NavBar