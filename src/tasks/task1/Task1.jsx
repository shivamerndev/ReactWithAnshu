import { useEffect, useState } from 'react'

const Task1 = () => {

  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([])
  const [pages, setPages] = useState([])
  const [loading, setLoading] = useState(true)
  const [add, setAdd] = useState(false)
  const [formData, setFormData] = useState({ title: "", body: "" })

  useEffect(() => {
    getData()
  }, [pages])


  useEffect(() => {
    setPages(posts.slice(0, count * 10))
  }, [count])


  const createData = async (data) => {
    let id = count + 1
    setCount(id)
    let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ ...data, id: id }),
      headers: {
        'Content-type': 'application/json',
      }
    })
    let resData = await res.json()
    console.log(resData)
    setPosts([...posts, resData])
  }

  const getData = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await res.json()
    setPosts(data)
    setLoading(false)
  }

  const updateData = async (data) => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json;',
      },
    })
    let resData = await res.json()
    console.log(resData)
  }

  const deleteData = async (id) => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
    let data = await res.json()
    console.log(data)
  }


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }


  if (loading) {
    return <div className='bg-red-500 text-center content-center h-[60vh]'>Loading...</div>
  }


  return (
    <div className='bg-gray-900 min-h-screen p-8 w-full text-white relative '>
      <button onClick={() => setAdd(true)} className='bg-blue-400 mb-4 font-semibold text-white cursor-pointer px-4 rounded-2xl py-1'>Create New Post</button>

      {add && <form onSubmit={(e) => {
        e.preventDefault()
        if (formData.id) {
          updateData(formData)
        } else {
          createData(formData)
        }
        setAdd(false)
        setFormData({ title: "", body: "" })
      }}
        className='w-1/3   mx-auto bg-black left-1/2 top-1/2 -translate-1/2 fixed shadow-2xl shadow-white/10 p-8 rounded-2xl space-y-2 ' >
        <h1 className='text-2xl font-semibold text-center'>{formData.id ? "Update your Post" : "Create New Post"}</h1>
        <p>Title</p>
        <input value={formData.title} onChange={handleChange} name='title' className='border px-4 py-1 w-full mb-4 rounded-md' required type="text" placeholder='Enter title..' />
        <p>Description</p>
        <input value={formData.body} onChange={handleChange} name='body' className='border px-4 py-1 w-full mb-4 rounded-md' type="text" placeholder='Enter Description' />
        <button onClick={() => {
          setAdd(false)
          setFormData({ title: "", body: "" })
        }} type="button" className='bg-red-400 cursor-pointer rounded-md px-4 py-1 mr-4 mt-4 ' >Cancle</button>
        <button type='submit' className={` ${!formData.id ? "bg-green-600" : "bg-amber-600"} cursor-pointer rounded-md px-4 py-1 mr-4 mt-4 `} > {formData.id ? "Update Post " : "+ Create Post"}</button>
      </form>}

      <div className='grid grid-cols-4 gap-4'>
        {
          posts.map((p, i) => <div key={i} className=' p-2 rounded-md  font-semibold bg-black'>
            <h1 className='truncate bg-zinc-900  mb-2 text-center uppercase'>{p.title}</h1>
            <p className=' overflow-hidden h-[5lh] text-center text-gray-400'>{p.body}</p>
            <button onClick={() => deleteData(p.id)} type="button" className='bg-red-500 cursor-pointer rounded-md px-4 py-1 mr-4 mt-4 ' >Delete</button>
            <button onClick={() => {
              setAdd(true)
              setFormData(p)
              console.log(p)
            }} type='submit' className='bg-amber-600 cursor-pointer rounded-md px-4 py-1 mr-4 mt-4 ' > Update Post</button>
          </div>
          )}
      </div>

    </div>
  )
}

export default Task1