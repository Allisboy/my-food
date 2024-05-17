import Hero from '../../components/Hero';
import MainHero from '../../components/MainHero';
import FoodSection from './FoodSection';

// import Slide from '../../components/Slide';

const Home = () => {
  return (
    <div className={`dark:bg-blue-200`}>
      <MainHero/>
      <Hero/>
      {/* <Slide/>  */}
      <FoodSection/>
    </div>
  )
}


export default Home