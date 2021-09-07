import './Slider.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Carousel } from 'react-responsive-carousel'

const Slider = () => {
  const baseUrl = 'http://react-responsive-carousel.js.org/assets/'

  const dataCarousel = [
    {
      id: 1,
      image: `${baseUrl}1.jpeg`,
      text: 'Blabla 1 '
    },
    {
      id: 2,
      image: `${baseUrl}2.jpeg`,
      text: 'Blabla 2'
    },
    {
      id: 3,
      image: `${baseUrl}3.jpeg`,
      text: 'Blabla 3'
    }
  ]
  return (
    <Carousel className='CarouselContainer'>
      {dataCarousel.map(slide => (
        <div key={slide.id}>
          <img src={slide.image}></img>
          <div className='overlay'>
            <h2 className='overlay_title'>{slide.text}</h2>
          </div>
        </div>
      ))}
    </Carousel>
  )
}
export default Slider
