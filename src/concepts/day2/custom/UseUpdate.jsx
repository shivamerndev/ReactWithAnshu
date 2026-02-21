import React from 'react'

const UseUpdate = (data) => {


    const updateData = async (data) => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json;',
            },
        })
        let resData = await res.json()
        console.log("Respose Data", resData)
    }


    return (
        <div>UseUpdate</div>
    )
}

export default UseUpdate