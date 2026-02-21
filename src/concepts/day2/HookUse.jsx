import UseFetch from './custom/UseFetch'

const HookUse = () => {

          // ⬇️⬇️⬇️⬇️⬇️ destructring with custom name like all values of data is now in products.
    const { data: products, loading, error } = UseFetch("https://fakestoreapi.com/products")

    console.log(products, loading, error)

    return (
        <div className='bg-black text-white text-2xl text-center content-center h-screen font-semibold'>
            <h1>Using Custom Hooks</h1>
        </div>
    )
}

export default HookUse