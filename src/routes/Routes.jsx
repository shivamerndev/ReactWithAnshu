import { Route, Routes } from 'react-router-dom'
import UseEffect from '../concepts/day1/UseEffect'
import VirtualDom from '../concepts/day1/VirtualDom'
import Task1 from '../tasks/task1/Task1'
import HookUse from '../concepts/day2/HookUse'

const Routing = () => <Routes>
    <Route path='/' element={<VirtualDom />} />
    <Route path='/effect' element={<UseEffect />} />
    <Route path='/custom' element={<HookUse />} />
    <Route path='/t1' element={<Task1 />} />
</Routes>

export default Routing