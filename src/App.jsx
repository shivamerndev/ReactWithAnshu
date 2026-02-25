import { Link, Outlet } from 'react-router-dom';
import Routing from './routes/Routes';

const App = () => {

    let links = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/cbr",
            name: "CBR"
        },
        {
            path: "/ref",
            name: "UseRef"
        },
    ]


    return <div className='bg-black h-screen text-white'>
        <nav className='flex bg-blue-600 py-4 text-xl w-full justify-center gap-8 px-8 items-center'>
            <h1 >CreateBrowserRoute Method is going on.</h1>
            {links.map(l => <Link key={l.path} to={l.path}>{l.name}</Link>)}
        </nav>
        <Outlet />
        {/* <Routing /> */}
    </div>
}

export default App