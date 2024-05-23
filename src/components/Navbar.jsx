import { useState } from 'react';

import {
  AnimatePresence,
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
    className='p-2 z-30 sticky top-0 dark:bg-cyan-950 dark:text-white bg-transparent flex items-center justify-center lg:justify-between w-screen'>
        <Logo className="lg:block hidden" />
        <div className="w-full flex justify-between items-center lg:hidden">
           <MobileNav side={side}/>
        </div>
        <div className='hidden lg:flex items-center flex-row '>
        <i className='fa fa-search text-blue-600 -mr-5 z-10'/>
          <input
          className="rounded-lg px-6 w-96 py-2 outline-none border border-blue-600"
          type="text"
          placeholder='search foods......'
           />
        </div>
        <ul className="lg:flex flex-row items-center hidden ">
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
const MobileNav=({side})=>{
  const [search, setSearch] = useState(false) 
  return (
    <>
      {search ?(
        <>
          <AnimatePresence>
            <motion.div
            initial={{
              width:0,
            }}
            animate={{
              width:"100vw"
            }}
            exit={{
              width:0
            }} 
            transition={{
              duration:1
            }}
            className='w-[100vw] flex justify-between items-center'>
            <i 
            onClick={()=>setSearch(false)}
            className='fa fa-times text-2xl '/>
            <input 
              type="text"
              placeholder='search here....'
              className='border-none outline-none bg-cyan-900 p-3 rounded-md w-[80vw] md:w-[50vw] text-white'
            />
            </motion.div>
          </AnimatePresence>
          
        </>
      ):<MainSet setSearch={setSearch} side={side}/>}
    </>
  )
}
const MainSet=({setSearch,side})=>{
  return (
    <>
      
      <div className='items-center'>
      <i 
            onClick={()=>side(true)}
            className='fa fa-bars text-blue-700 cursor-pointer text-2xl'/>
      </div>
      <Logo className={"text-2xl"}/>
      <div>
      <i 
      onClick={()=>setSearch(true)}
        className='fa fa-search cursor-pointer text-2xl text-blue-700'
      />
      </div>
    
    </>
  )
}

export default Navbar