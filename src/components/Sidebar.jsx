import { Link } from 'react-router-dom';

const Sidebar = ({side}) => {
  return (
    <div className="z-40 bg-fixed bg-no-repeat  bg-cover bg-center fixed top-0 left-0 w-[100vw] h-dvh bg-[url('/src/assets/food.jpg')]">
        <div className="flex-col z-30 relative h-dvh w-[100vw] flex items-center justify-center">
          <div className="text-white text-2xl p-3 border">
          <Link to="/">Home</Link>
          </div>
          <div className="text-white p-3">
            <h2>FOODS LIST</h2>
          </div>
          <div className="text-white p-3">
            <Link to="/FoodGalleries">FOODS GALLERY</Link>
          </div>
          <div className="text-white p-3">
            <h2>ABOUT</h2>
          </div>
          <div className="text-white p-3">
            <h2>CONTACT </h2>
          </div>
          <div className="hover:text-3xl p-3 hover:bg-blue shadow-md ">
            <span >
              <i 
              onClick={()=>side(false)}
              className="fa fa-times text-2xl text-white"/>
            </span>
          </div>
        </div>    
    </div>
  )
}

export default Sidebar