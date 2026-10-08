import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom"

import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Services from "./pages/Services"

import CustomCursor from "./components/CustomCursor"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <HashRouter>
      <CustomCursor />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </HashRouter>
  )
}

export default App
