import { motion } from 'framer-motion';

import img3 from '../assets/okra2.jfif';

const MainHero = () => {
  return (
    <div className='h-screen bg-[url("./../src/assets/wave.svg")] bg-no-repeat bg-cover flex flex-col lg:flex-row items-center  w-svw p-4'>
    
        <div className='lg:w-3/5 flex flex-col items-center justify-center h-1/2 lg:h-full'>
        <h1 className="text-3xl lg:text-5xl ">
                <span className="bg-clip-text font-bold bg-gradient-to-r from-cyan-500 to-blue-800 text-transparent">FOODS AROUND YOU</span>
            </h1>
            <p className="dark:text-white w-60 md:w-full text-center text-black p-2">Get amazing ingredient here to start cooking delicious meals</p>
            <motion.button
             
            className='text-white rounded-xl dark:border dark:border-white sm:mt-10 md:mt-10 mt-14 w-[70vw]  sm:w-[330px] px-3 py-2 bg-blue-700'>NO MORE</motion.button>
        </div>
        <div className="lg:w-2/5 flex sm:mt-3  lg:mt-0  items-center justify-center h-1/2 lg:h-full lg:flex-col relative">
        <div className="absolute top-52 left-10">
          <div className="w-7 after:contents['']">
          <img src={img3} className='object-cover w-full  rounded-full'/>
          </div>
        </div>
        <div className='rounded-full'>
        <img src={img3} className='object-cover w-full ring-gray-200 ring-8 rounded-full'/>
        </div>
        <div className='rounded-full'>
        <img src={img3} className='object-cover w-full ring-gray-200 ring-8 rounded-full'/>
        </div>
        <div className='rounded-full absolute left-0'>
        <img src={img3} className='object-cover w-full rounded-full ring-gray-200 ring-8'/>
        </div>
        </div>
    </div>
  )
}

export default MainHero