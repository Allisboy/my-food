import { useState } from 'react';

import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import FoodApi from '../../api/foodApi';
import { getFood } from '../../api/index';
import FoodCard from '../../components/FoodCard';
import Hero from '../../components/Hero';

const FoodGalleries = () => {
  const [next,setNext]=useState(0)
  const {isLoading,error,data}=useQuery({
    queryKey:['getFoods'],
    queryFn:()=>{return getFood()},
    refetchOnMount:false
})
// if(isLoading){
//     return <h1>Loading ......</h1>
// }
// if(error){
//     return <h1>error someWHere ......</h1>
// }
const foodData=FoodApi

  return (
    <div className="w-screen p-2 ">
        <Hero/>
        <div className='p-3 md:flex-row grid-flow-row items-center grid md:grid-flow-col md:grid-rows-3'>
            {foodData.map((foods,index)=>{
                if( index >= 0 && index <= 10){
                {/* console.log(index) */}
                return <FoodCard key={index} data={foods}/>
                }
            })}
            <div className="flex mt-4 text-cyan-500 md:flex flex-col items-center justify-center">
              <Link>Next  {'>>'}</Link>
            </div>
        </div>
    </div>
  )
}

export default FoodGalleries

