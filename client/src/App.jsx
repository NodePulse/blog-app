import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import BLog from './pages/BLog'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/:id' element={<BLog />} />
        </Routes>
      </div>
    </>
  )
}

export default App
