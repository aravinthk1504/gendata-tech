import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import AICapabilities from "../sections/AICapabilities"
import TechnologyServices from "../sections/TechnologyServices"
import IntelligenceProcess from "../sections/IntelligenceProcess"
import Products from "../sections/Products"
import Training from "../sections/Training"
import Insights from "../sections/Insights"
import FinalCTA from "../sections/FinalCTA"
import Footer from "../sections/Footer"
function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* ========================================
            AI CAPABILITIES
            NEXT SECTION
        ======================================== */}

        <AICapabilities />

        {/* ========================================
            SUPPORTING TECHNOLOGY SERVICES
        ======================================== */}
        <TechnologyServices />

        <IntelligenceProcess />
        {/* ========================================
            PRODUCTS
        ======================================== */}
        <Products />

        {/* ========================================
            FUTURE PROJECTS

            Enable only when GenData Tech has
            genuine completed projects.

            <ProjectsSection />
        ======================================== */}


        {/* ========================================
            TRAINING
        ======================================== */}
        <Training />

        {/* ========================================
            BLOG / AI INSIGHTS
        ======================================== */}
         <Insights />
        {/* ========================================
            CONTACT CTA
        ======================================== */}
        <FinalCTA />

        <Footer />
        
      </main>
    </>
  )
}

export default Home