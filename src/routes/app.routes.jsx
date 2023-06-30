import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home/index.jsx'
import { Profile } from '../pages/Profile/index.jsx'
import { NewNote } from '../pages/NewNote/index.jsx'
import { Details } from '../pages/Details/index.jsx'

export function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/new' element={<NewNote />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  ) 
}