import { Link, Outlet } from 'react-router-dom';
import Routing from './routes/Routes';

const App = () => {
    return <div className='bg-black h-screen text-white'>
        <nav className='flex bg-blue-400 py-4 text-2xl w-full justify-end gap-8 px-8 items-center'>
            <h1 className='text-red-500'>CreateBrowserRoute Method is going on.</h1>
            <Link to='/'>Home</Link>
            <Link to='/cbr'>CreateBrowserRouter</Link>
            <Link to='/cbr2'>CreateBrowserRouter2</Link>
        </nav>
        <Outlet />
        {/* <Routing /> */}
    </div>
}

export default App