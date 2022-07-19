import { Link } from 'react-router-dom'

function NavBar () {
    return (
        <nav> 
        <ul>
          <li>
          <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/eat'>Consume</Link>
          </li>
          <li>
          <Link to='/study'>Study</Link>
          </li>
          <li>
          <Link to='/joke'>Laugh</Link>
          </li>
          <li>
          <Link to='/b/'>Learn</Link>
          </li>
        </ul>
      </nav>
    )
}

export default NavBar