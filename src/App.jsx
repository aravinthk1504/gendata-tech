import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom"

import Home from "./pages/Home"
import Services from "./pages/Services"
import Blog from "./pages/Blog"
import BlogDetails from "./pages/BlogDetails"
import About from "./pages/About"

import Contact from "./pages/Contact"

import AIMLDevelopment from "./pages/services/AIMLDevelopment"
import FullStackDevelopment from "./pages/services/FullStackDevelopment"
import WebDevelopment from "./pages/services/WebDevelopment"
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment"
import AppDevelopment from "./pages/services/AppDevelopment"
import IoTSolutions from "./pages/services/IoTSolutions"

import CustomCursor from "./components/CustomCursor"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <HashRouter>
      <CustomCursor />
      <ScrollToTop />


      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/services/ai-ml-development"
          element={<AIMLDevelopment />}
        />

        <Route
          path="/services/full-stack-development"
          element={<FullStackDevelopment />}
        />  

        <Route
          path="/services/web-development"
          element={<WebDevelopment />}
        />


        <Route
          path="/services/software-development"
          element={<SoftwareDevelopment />}
        />

        <Route
          path="/services/app-development"
          element={<AppDevelopment />}
        />

        <Route
          path="/services/iot-solutions"
          element={<IoTSolutions />}
        />


        <Route
          path="/blog"
          element={<Blog />}
        />

        <Route
          path="/blog/:slug"
          element={<BlogDetails />}
        />


        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </HashRouter>
  )
}

export default App