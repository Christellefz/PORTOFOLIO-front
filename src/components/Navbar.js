import './Navbar.css'

import BG from '../Images/BG.jpg'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax'

const Navbar = () => {
  return (
    <div>
      <div className='header'>
        <Parallax bgImage={BG} strength={-200}>
          <div className='header-section'>
            <div className='navItems'>
              <ul className='navlist'>
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
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  )
}
export default Navbar
