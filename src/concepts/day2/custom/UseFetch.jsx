import { useEffect, useState } from 'react'

const UseFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const getData = async () => {
        try {
            let res = await fetch(url)
            let data = await res.json()
            setData(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        getData()
        console.log('custom hook')
    }, [])

return {data,loading,error}
}

export default UseFetch