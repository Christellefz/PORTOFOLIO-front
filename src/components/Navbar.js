import './Navbar.css'

import BG from '../Images/BG.jpg'
import Burger from './Burger.js'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax'

const Navbar = () => {
  return (
    <div>
      <div className='header'>
        <Parallax bgImage={BG} strength={-200}>
          <div className='header-section'>
            <nav className='navItems'>
              <ul className='navlist'>
                <Link to='/' className='link'>
                  <li className='navli'>Accueil</li>
                </Link>
                <Link to='/about' className='link'>
                  <li className='navli'>A Propos</li>
                </Link>
                <Link to='/ProBackground' className='link'>
                  <li className='navli'>Parcours</li>
                </Link>
                <Link to='/skills' className='link'>
                  <li className='navli'>Compétences</li>
                </Link>
                <Link to='/contact' className='link'>
                  <li className='navli'>Contact</li>
                </Link>
                <Link to='/don' className='link'>
                  <li className='navli'>Don</li>
                </Link>
              </ul>
            </nav>
          </div>
        </Parallax>
      </div>
      <Burger />
    </div>
  )
}
export default Navbar
