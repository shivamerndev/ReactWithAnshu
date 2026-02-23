import React from 'react'
import { useParams } from 'react-router-dom'

const Routing = () => {
  const {id}= useParams()

  return (
    <div>
        <h1 className='outline m-4 text-center py-4 rounded-full '>Today I learned about Routing</h1>
       {id && <h2 className='bg-red-500 text-center py-4 rounded-full text-2xl font-semibold'>This  is Params Id {"=>"} {id }</h2>}
    </div>
  )
}

export default Routing