import { createBrowserRouter } from 'react-router-dom'
import Routing from '../concepts/day3/Routing'
import App from '../App'
import Task1 from '../tasks/task1/Task1'

const allRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/cbr",
                element: <Routing />
            },
            {
                path: "/:id",
                element: <Routing />
            },
            {
                path: "/t1",
                element: <Task1 />
            }
        ]
    }

])

export default allRoutes