import { useState } from 'react';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import {
  Route,
  Routes,
} from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import FoodGalleries from './pages/Galleries/FoodGalleries';
import Home from './pages/Home/Home';

const queryClient=new QueryClient()
function App() {
  // useEffect(()=>{
  //   getFood()
  // },[])
  
  const [sidebar,setSidebar]=useState(false)

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Navbar side={setSidebar}/> 
      {sidebar && <Sidebar side={setSidebar}/> }  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/foodGalleries' element={<FoodGalleries/>}/>
      </Routes>
      <Footer/>
    </QueryClientProvider>
      
    </>
  )
}
  
export default App


