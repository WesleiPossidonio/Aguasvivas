
import { Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home/Index'
import { HomepratiaEFlorais } from '../Pages/HomepatiaEFlorais'
import { Manipulados } from '../Pages/Manipulados'
import { Suplementos } from '../Pages/Suplementos'
import { Dermocosmeticos } from '../Pages/Dermocosmeticos'
import { LOjas } from '../Pages/Lojas'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/homepatia-e-florais' element={<HomepratiaEFlorais />} />
      <Route path='/manipulados' element={<Manipulados />} />
      <Route path='/suplementos' element={<Suplementos />} />
      <Route path='/dermocosmeticos' element={<Dermocosmeticos />} />
      <Route path='/lojas' element={<LOjas />} />
    </Routes>
  )
}


