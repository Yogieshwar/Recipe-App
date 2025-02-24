import React from 'react'
import RecipeApp from './components/RecipeApp'
import { Route,Routes } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<RecipeApp/>}/>
        <Route path='/:id' element={<RecipeDetails/>}/>

      </Routes>
      
    </div>
  )
}

export default App
