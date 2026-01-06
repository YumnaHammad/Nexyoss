import React from 'react'
import Contact from '../../components/Contact'
import Channel from '../../components/Partner/FindAChannel/Channel'
import Slider from '../../components/sliders/Slider'
import TimelineSlider from '../../components/sliders/TimelineSlider'
import Sensing_Matter from '../../components/Sensing_Matter'
import Products from '../../components/Products'
import HeroCarousel from '../../pages/Home/HeroCarousel'
// import MilesightCarousel from '../components/MilesightCarousel'
import TrustedBy from '../../components/SpaceOccupancy/TrustedBy'
import AnimatedCards from '../../components/AnimatedCards'
const Home = () => {
  return (
    <div className='w-full'>
<HeroCarousel/>

      <Products/>
      <Sensing_Matter/>
      <TimelineSlider/>
      <Slider/>
      <Channel/>
      <AnimatedCards />
      <TrustedBy/>
      <Contact/>
    </div>
  )
}

export default Home
