import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="large-container">

        <a href='/' className='logo'>Thread Hub</a>

        <ul className='global-nav'>
          <li><NavLink to="/" activeclassname='active' exact='true'>Threads</NavLink></li>
          <li><NavLink to="/create" activeclassname='active'>New thread</NavLink></li>
        </ul>

      </div>
    </header>
  )
}

export default Header