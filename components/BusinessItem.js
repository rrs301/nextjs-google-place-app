import Image from 'next/image'
import React from 'react'

function BusinessItem({business}) {
    const GOOGLE_API_KEY=process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    const photo_ref=business?.photos?business?.photos[0]?.photo_reference:''


  return (
    <div className='flex gap-3 p-3
    border-b-[1px] border-purple-300 mb-4 items-center'>
        <Image src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_ref}&key=${GOOGLE_API_KEY}`}
            alt='business-image'
            width={90}
            height={90}
            className='rounded-xl
            object-cover h-[100px] w-[100px]'
        />
        <div>
            <h2 className='text-[20px] font-semibold'>
                {business.name}</h2>
            <h2 className='text-[15px] text-gray-500'>
                {business.vicinity}</h2>
            <div className='flex gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" fill="currentColor" 
                className="w-5 h-5 text-yellow-500">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <h2>{business.rating}</h2>
        
            </div>

        </div>
    </div>
  )
}

export default BusinessItem