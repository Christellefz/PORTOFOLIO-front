import './About.css'

import { useEffect, useState } from 'react'

import Honor from '../Images/Honor.jpg'
import Moi from '../Images/Moi.jpg'

const About = () => {
  const [letter, setLetter] = useState([])
  let array = [
    'développeuse',
    'créatrice',
    'conseillère',
    'autodidacte',
    'animal Lover <3'
  ]
  let wordIndex = 0
  let letterIndex = 0

  useEffect(() => {
    loop()
  }, [])

  const createLetter = () => {
    setLetter(letter => [...letter, array[wordIndex][letterIndex]])
  }
  const loop = () => {
    setTimeout(() => {
      if (wordIndex >= array.length) {
        wordIndex = 0
        letterIndex = 0
        loop()
      } else if (letterIndex < array[wordIndex].length) {
        createLetter()
        letterIndex++
        loop()
      } else {
        wordIndex++
        letterIndex = 0
        setLetter([])
        loop()
      }
    }, 200)
  }

  return (
    <div className='aboutContainer'>
      <h1 className='title1'>Qui suis-je?</h1>
      <div className='whoAmI'>
        <h3>Je suis {letter} </h3>
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
