import './Bando.css'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Bando = () => {
  return (
    <div className='bandoContainer'>
      <ul className='iconeList'>
        <a href='https://www.linkedin.com/in/christelle-fernandez-1018a717b/'>
          <li>
            <AiFillLinkedin size='x5' />
          </li>
        </a>
        <a href='https://github.com/Christellefz'>
          <li>
            <AiFillGithub size='x5' />
          </li>
        </a>
      </ul>
      <ul className='smallIconeList'>
        <li>
          <AiFillLinkedin size='x3' />
        </li>
        <li>
          <AiFillGithub size='x3' />
        </li>
      </ul>
    </div>
  )
}
export default Bando
