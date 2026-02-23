import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import allRoutes from './routes/CreateBrowserRouter.jsx'

createRoot(document.getElementById('root')).render(
    <RouterProvider router={allRoutes} />
    //    <BrowserRouter>
    //    <App/>
    //    </BrowserRouter>
)