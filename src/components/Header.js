import { NavLink } from 'react-router-dom'
import '../styles/header.css'

function Header() {
  return (
    <header>
      <div className="large-container">

        <a href='/' className='logo'>Thread Hub</a>

        <ul className='global-nav'>
          <li><NavLink to="/" activeclassname='active' exact='true'>Top</NavLink></li>
          <li><NavLink to="/about" activeclassname='active'>About</NavLink></li>
        </ul>

      </div>
    </header>
  )
}

export default Header