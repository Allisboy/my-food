import {
  createContext,
  useState,
} from 'react';

export const nav=createContext()
const SideNav = ({children}) => {
  const [first, setfirst] = useState(false)
  const val={first,setfirst}
    
  return (
    <>
      <nav.Provider value={val}>
        {children}
      </nav.Provider>
    </>
  )
}

export default SideNav