import './About.css'

import Honor from '../Images/Honor.jpg'
import Moi from '../Images/Moi.jpg'

const About = () => {
  return (
    <div className='aboutContainer'>
      <h1 className='title1'>Qui suis-je?</h1>
      <div className='whoAmI'>
        <p className='pstyle'>
          lorem ipsum dolor sit amet, consectetur adip jzfg oue ruihfbiê aprhgîz
          eufhizhzei ze fgvboz aufgbp hbpiz eriqguber ggedzhfbzp areuyf gbepuyg
          vbe irgbn eiugv qejgbe quvhbg gjrhihbiupgi_pqe_ygvbipeq gvbie
          auvbhiêauvbiea^rueri{' '}
        </p>
        <img className='Moi' src={Moi}></img>
      </div>
      <h1 className='title1'>Mes Valeurs de Développeur</h1>
      <div className='whoAmI'>
        <img className='honor' src={Honor}></img>
        <p className='pstyle'>
          lorem ipsum dolor sit amet, consectetur adipis qsdfg hjedrft
          gyhujerftg yhjufghjkdfg hjksxdcfvgbh nj,k;lsdfghj kldsfghj
          kldcfvghjkldcfvgbhnjksdfghjklsdfghjklsdfghj
          edcfvgbhnj,k;xcdtfvygbhunj,xcfgvbhnj,cfvgbhnji,
        </p>
      </div>
    </div>
  )
}
export default About
