import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Home from "./pages/Home"
import CustomCursor from "./components/CustomCursor"
import Blog from "./pages/Blog"

function App() {
  return (
    <BrowserRouter>

      <CustomCursor />
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blog" element={<Blog />} />
        
      </Routes>
    </BrowserRouter>
  )
}




export default App