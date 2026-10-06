import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom"

import Home from "./pages/Home"
import CustomCursor from "./components/CustomCursor"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"

function App() {
  return (
    <HashRouter>

      <CustomCursor />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </HashRouter>
  )
}




export default App
