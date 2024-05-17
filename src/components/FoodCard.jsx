import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FoodCard=({data})=>{
    const {image,id,title}=data
    return (
        <motion.div 
        initial={{
            opacity:0,
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1
        }}
        className="flex items-center justify-center mt-4">
            <div className=" flex flex-col items-center">
                <div className="h-2/4 w-60 ">
                    <img src={image} className='w-full object-cover '/>
                </div>
                <div className='mt-3 h-2/4 text-center flex flex-col items-center'>
                    <h2 className='text-2xl w-60'>{title}</h2>
                   
                  <div className=' mt-4'>
                  <Link 
                  className='p-3 bg-cyan-600 mt-3 text-white'
                  >more</Link>
                    
                  </div>
                </div>
            </div>
        </motion.div>
    )
}
export default FoodCard