import { createBrowserRouter } from 'react-router-dom'
import Routing from '../concepts/day3/Routing'
import App from '../App'
import Task1 from '../tasks/task1/Task1'
import Ref from '../concepts/day4-UseRef/Ref'

const allRoutes = createBrowserRouter([
    {
        path: "/", element: <App />,
        children: [
            { path: "/cbr", element: <Routing /> },
            { path: "/:id", element: <Routing /> },
            { path: "/t1", element: <Task1 /> },
            { path: "/ref", element: <Ref /> }
        ]
    }

])

export default allRoutes