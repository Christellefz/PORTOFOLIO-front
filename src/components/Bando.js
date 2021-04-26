import './Bando.css'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Bando = () => {
  return (
    <div className='bandoContainer'>
      <ul className='iconeList'>
        <li>
          <AiFillLinkedin size='x5' />
        </li>
        <li>
          <AiFillGithub size='x5' />
        </li>
      </ul>
    </div>
  )
}
export default Bando
