import './Home.css'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container    '>
      <div className='welcomeScreen'>
        <h1 className='bienvenue'>Bienvenue</h1>
        <Link to='/about'>
          <button className='entryButt'>Entrée</button>
        </Link>
      </div>
    </div>
  )
}
export default Home
