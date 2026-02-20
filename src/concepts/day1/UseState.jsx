import React, { useState } from 'react'

const UseState = () => {

    const [count, setCount] = useState(0)
    const [user, setUser] = useState({ name: "Anshu", role: "Admin" })

    const changeRole = () => {
        user.role = "user"
        setUser(user) 
        // setCount(count + 1) // ye render karega to role bhi chage honge
    }

    return (
        <div className='h-[20vw] text-2xl text-center text-white bg-gray-800 py-4 '>
            <button onClick={() => {
                // setCount(count++) // Not working because count = count + 1 but count is constant
                setCount(count + 1) // working because count + 1 not changing variable only tell that variable will be +1 from count
            }}>
                Count : {count}
            </button>
            <div className='  text-center '>
                <button>
                    <p>{user.role} </p>
                    <button className="outline p-2 m-12" onClick={changeRole}>change role</button>
                </button>
            </div>
        </div>
    )
}

export default UseState