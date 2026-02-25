import React, { useRef } from 'react'

const Ref = () => {

    const focusRef = useRef(null)

    const focusKaro = () => {
        // focusRef.current.focus()
        focusRef.current.click()
    }

    return (
        <div className='h-full flex justify-center items-center gap-4 flex-col bg-black text-white '>
            {/* <input ref={focusRef} className='border rounded-full px-4 py-1 ' type="text" placeholder='Enter Your Name...' /> */}
            <input ref={focusRef} className='border rounded-md px-4 py-1 ' type="file" placeholder='Choose Your File' />
            <button onClick={focusKaro} className='border-2 cursor-pointer hover:bg-sky-500 border-blue-400 rounded-full px-4 py-1 '>Focus Input</button>
        </div>
    )
}

export default Ref