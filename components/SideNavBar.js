import Image from 'next/image'
import React, { useState } from 'react'

function SideNavBar() {
    const [activeIndex,setActiveIndex]=useState(0);
    const menu=[
        {
            id:1,
            name:'search',
            logo:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" 
        },
        {
            id:2,
            name:'Fav',
            logo:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" 
        }
    ]
   


  return (
    <div className={`p-2 items-center flex flex-col 
    w-[80px] space-y-4 shadow-md shadow-purple-400
    h-screen sticky top-0 bg-white z-20 `}>
        <Image src='/logo.png'
        alt='logo'
        width={50}
        height={50} />

        {menu.map((item,index)=>(
            <svg xmlns="http://www.w3.org/2000/svg" 
            key={index}
            fill="none" viewBox="0 0 24 24" 
            strokeWidth={1.5} stroke="currentColor" 
            onClick={()=>setActiveIndex(index)}
            className={`w-10 h-10 hover:text-purple-500
            hover:bg-purple-100
            p-2 cursor-pointer rounded-lg ${index==activeIndex?
            'text-purple-500 bg-purple-100':null}`}>
                <path strokeLinecap="round" strokeLinejoin="round" 
                d={item.logo} />
                </svg>
        ))}
    </div>
  )
}

export default SideNavBar