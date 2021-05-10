import './Burger.css'

import { Link } from 'react-router-dom'
import { useState } from 'react'

const Burger = () => {
  const [checked, setChecked] = useState(false)
  return (
    <nav className='navigation'>
      <div id='menuToggle'>
        <input type='checkbox' onClick={() => setChecked(!checked)} />
        <span></span>
        <span></span>
        <span></span>
        {checked ? (
          <ul className='menu'>
            <Link to='/home' className='link'>
              <li>Accueil</li>
            </Link>
            <Link to='/about' className='link'>
              <li>A Propos</li>
            </Link>
            <Link to='/ProBackground' className='link'>
              <li>Parcours</li>
            </Link>
            <Link to='/skills' className='link'>
              <li>Compétences</li>
            </Link>
            <Link to='/contact' className='link'>
              <li>Contact</li>
            </Link>
          </ul>
        ) : null}
      </div>
    </nav>
  )
}
export default Burger
