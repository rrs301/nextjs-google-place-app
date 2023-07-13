import React, { useContext } from 'react'
import GlobalApi from '../services/GlobalApi'
import { UserLocationContext } from '../context/UserLocationContext'
import { BusinessListContext } from '../context/BusinessListContext'

function SearchBar() {
  const {userLocation,setUserLocation}=useContext(UserLocationContext)
  const {businessList,setBusinessList}=useContext(BusinessListContext)
 
  const searchPlace=(searchText)=>{
      GlobalApi.searchPlace(searchText,userLocation.lat,userLocation.lng)
      .then(resp=>
        setBusinessList(resp.data.candidates)
        )
     
  }
  return (
    <div className='flex gap-3 bg-purple-100
     p-3 rounded-xl items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
         viewBox="0 0 24 24" strokeWidth={1.5} 
         stroke="currentColor" 
         className="w-6 h-6 text-purple-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input type='text'
        placeholder='Search'
        
        onKeyDown={(e)=>e.key=='Enter'&&searchPlace(e.target.value)}
        className='bg-transparent outline-none w-full text-[17px]
        placeholder-purple-400'
        />

    </div>
  )
}

export default SearchBar