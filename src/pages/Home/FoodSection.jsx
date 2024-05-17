import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import FoodApi from '../../api/foodApi';
import { getFood } from '../../api/index';
import FoodCard from '../../components/FoodCard';

const FoodSection=()=>{
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
    // console.log(foodData);
    return (
        <div className='p-3 md:flex-row grid-flow-row items-center grid md:grid-flow-col md:grid-rows-3'>
            {foodData.map((foods,index)=>{
                if( index >= 0 && index <= 10){
                {/* console.log(index) */}
                return <FoodCard key={index} data={foods}/>
                }
            })}
            <div className="hidden md:flex flex-col items-center justify-center">
                <div>
                    <Link to="/foodGalleries"
                    className='p-4 bg-blue-500 text-center text-white rounded-lg'>view more {'>>'}</Link>
                </div>
            </div>
            <div className='md:hidden mt-5 flex flex-col items-center justify-center text-center'>
            <Link to="/foodGalleries"
                    className='p-2 bg-cyan-50 text-cyan-400 text-center '>view more {'>>'}</Link>
            </div>
        </div>
    )
}
export default FoodSection