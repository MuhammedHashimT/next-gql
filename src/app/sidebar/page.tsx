'use client'
import React, { useState } from 'react'


const page = () => {
    const [isOpen , setIsOpen ] = useState(true)
  return (
    <div className={`${isOpen? 'w-40' : 'w-10'} h-96 bg-white rounded-md m-10 transition-all`}>
        <button onClick={()=> setIsOpen(!isOpen) }>jfsljfdslhlk</button>
    </div>
  )
}

export default page