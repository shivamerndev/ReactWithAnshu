import { useEffect, useState } from 'react'
import UseState from '../../concepts/day1/UseState'

const UseEffect = () => {

  const [count, setCount] = useState(1)
  const [posts, setPosts] = useState([])
  const [pages, setPages] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    let res = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await res.json()
    setPosts(data)
    setPages(data.slice(0, 10))
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    setPages(posts.slice(0, count * 10))
  }, [count])


  if (loading) {
    return <div className='bg-red-500 text-center content-center h-[60vh]'>Loading...</div>
  }


  return (
    <>
      <UseState />
      <div className='bg-gray-700 pb-30 grid gap-3 px-4  grid-cols-4 font-semibold justify-around text-white py-4 text-center'>
        {
          pages.map(p => <div className=' p-2 rounded-md bg-zinc-900'>
            <h1 className='truncate bg-zinc-800 mb-2  uppercase'>{p.title}</h1>
            <p className=' overflow-hidden h-[5lh] text-gray-400'>{p.body}</p>
          </div>)
        }
      </div>
      <div className='bg-gray-950 flex justify-center items-center border-t-2 fixed bottom-0 w-full  text-white text-center py-4 text-2xl space-x-8'>
        <button onClick={() => {
          if (count > 1) setCount(count - 1)
        }} className='cursor-pointer'>⬅️</button>
        <div className=' w-1/2 content-center space-x-8'>
          {[...Array(10)].map((e, i) => <span className={` ${count === i + 1 && "bg-amber-600 rounded-full px-1.5"} cursor-pointer`} onClick={() => setCount(i + 1)}> {i + 1} </span>)}
        </div>
        <button onClick={() => {
          if (count < 10) setCount(count + 1)
        }} className='cursor-pointer'>➡️</button>
      </div>
    </>
  )
}

export default UseEffect