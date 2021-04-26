import './About.css'

import Bando from '../components/Bando'
import Honor from '../Images/Honor.jpg'
import Moi from '../Images/Moi.jpg'

const About = () => {
  return (
    <div className='container'>
      <h1 className='title1'>Qui suis-je?</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adip
        jzfgoueruihfbiêaprhgîzeufhizhzei
        zefgvbozaufgbphbpizeriqguberggedzhfbzpareuyfgbepuygvbeirgbneiugv
        qejgbequvhbggjrhihbiupgi_pqe_ygvbipeqgvbieauvbhiêauvbiea^rueri{' '}
      </p>
      <img className='Moi' src={Moi}></img>
      <h1 className='title1'>Mes Valeurs de Développeur</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adipis
        qsdfghjedrftgyhujerftgyhjufghjkdfghjksxdcfvgbhnj,k;lsdfghjkldsfghj
        kldcfvghjkldcfvgbhnjksdfghjklsdfghjklsdfghj
        edcfvgbhnj,k;xcdtfvygbhunj,xcfgvbhnj,cfvgbhnji,
      </p>
      <img className='honor' src={Honor}></img>
      <Bando />
    </div>
  )
}
export default About
