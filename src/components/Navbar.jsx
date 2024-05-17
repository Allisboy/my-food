import { useState } from 'react';

import {
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { Link } from 'react-router-dom';

import Logo from './Logo';

const Navbar = ({side}) => {
  
  const {scrollY}=useScroll()
  const [hidden, sethidden] = useState(false) 
  
  useMotionValueEvent(scrollY,'change',(latest)=>{
    const previous=scrollY.getPrevious();
    
    if (latest > previous && latest > 150) {
      sethidden(true)
      
    } else {
      sethidden(false)
    }  
  })
  
  return (
    <motion.div 
      variants={{
        visible:{y:0},
        hidden:{y:"-100%"},
      }}
      animate={hidden ? 'hidden':'visible'}
      transition={{duration:0.35,ease:"easeInOut"}}
    className='w-full z-30 sticky top-0 dark:bg-black dark:text-white bg-transparent flex items-center justify-between p-2'>
        <Logo/>
        <div className="flex justify-center items-center md:hidden">
            <i className='fa fa-search -mr-5 text-blue-700 z-10 cursor-pointer'/>
            <input 
            className='px-6 p-3 rounded-2xl border outline-none border-blue-600'
            type='text' 
            placeholder='search foods here....'/>
            <i 
            onClick={()=>side(true)}
            className='fa fa-bars -ml-5 text-blue-700 cursor-pointer'/>
        </div>
        <div className='hidden md:flex items-center flex-row '>
        <i className='fa fa-search text-blue-600 -mr-5 z-10'/>
          <input
          className="rounded-lg px-6 w-96 py-2 outline-none border border-blue-600"
          type="text"
          placeholder='search foods......'
           />
        </div>
        <ul className="md:flex flex-row items-center hidden ">
          <Link to="/">
          <li className='p-3 border border-blue-500'>HOME</li>
          </Link>
          <Link to="/foodGalleries">
          <li className='p-3 '>FOODS GALLERY</li>
          </Link>
          <Link to="/">
          <li className='p-3 '>FOODS LIST</li>
          </Link>
          <Link to="/">
          <li className='p-3 '>ABOUT</li>
          </Link>
          <Link to="/">
          <li className='p-3 '>CONTACT</li>
          </Link>
        </ul>
    </motion.div>
  )
}

export default Navbar