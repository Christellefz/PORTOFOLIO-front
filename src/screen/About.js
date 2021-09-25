import './About.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { useEffect, useState } from 'react'

import Moi from '../Images/Moi.jpg'
import Slider from '../components/Slider.js'

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
    <div>
      <div className='aboutContainer'>
        <h1 className='title1'>Qui suis-je?</h1>
        <div className='whoAmI'>
          <h3>Je suis {letter} </h3>
          <img className='Moi' src={Moi}></img>
        </div>
        <h1 className='title1'>Caroussel</h1>
        <div className='whoAmI'></div>
      </div>
      <Slider />
    </div>
  )
}
export default About
