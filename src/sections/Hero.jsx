import { motion } from "motion/react"
import { Link } from "react-router-dom"

import AnimatedBackground from "./hero/AnimatedBackground"


function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      <AnimatedBackground />


      {/* ========================================
          LARGE BACKGROUND BRAND TEXT
      ======================================== */}

      <div className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 select-none lg:block">
        <span className="font-heading text-[15vw] font-bold leading-none tracking-[-0.08em] text-white/[0.015]">
          GENDATA
        </span>
      </div>



      {/* ========================================
          HERO CONTENT
      ======================================== */}

      <div className="relative z-10 mx-auto w-full max-w-350 px-6 pb-20 pt-36 lg:px-10">

        <div className="mx-auto max-w-5xl text-center">


          {/* EYEBROW */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-4 py-2 backdrop-blur-md"
          >

            <span className="relative flex h-2 w-2">

              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-accent" />

            </span>

            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-100">
              AI-Powered Technology
            </span>

          </motion.div>



          {/* MAIN HEADING */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.85,
              delay: 0.08,
            }}
            className="font-heading text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            AI built for

            <span className="block bg-linear-to-r from-white via-blue-100 to-brand-accent bg-clip-text text-transparent">
              real-world impact.
            </span>

          </motion.h1>



          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.18,
            }}
            className="mx-auto mt-7 max-w-2xl font-body text-base leading-8 text-slate-300 sm:text-lg"
          >
            GenData Tech develops intelligent AI models, agentic systems
            and automation solutions engineered around real-world
            challenges.
          </motion.p>



          {/* CTA BUTTONS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.28,
            }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >

            <Link
              to="/services"
              className="group inline-flex min-w-55 items-center justify-center gap-3 rounded-full bg-brand-accent px-7 py-4 font-body text-sm font-semibold text-white shadow-[0_12px_40px_rgba(5,124,250,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Explore AI Capabilities

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>


            <Link
              to="/contact"
              className="inline-flex min-w-40 items-center justify-center rounded-full border border-white/12 bg-white/4 px-7 py-4 font-body text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white/20 hover:bg-white/8"
            >
              Let's Talk
            </Link>

          </motion.div>



          {/* CAPABILITY LABELS */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.55,
            }}
            className="mx-auto mt-18 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/8 pt-7"
          >

            {[
              "AI Models",
              "Agentic AI",
              "AI Automation",
              "Custom AI",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >

                {index !== 0 && (
                  <span className="hidden h-1 w-1 rounded-full bg-brand-accent sm:block" />
                )}

                <span className="font-body text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  {item}
                </span>

              </div>
            ))}

          </motion.div>

        </div>

      </div>



      {/* ========================================
          SCROLL INDICATOR
      ======================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 md:block"
      >

        <div className="flex flex-col items-center gap-3">

          <span className="font-body text-[9px] uppercase tracking-[0.3em] text-slate-500">
            Scroll
          </span>

          <div className="relative h-9 w-px overflow-hidden bg-white/10">

            <motion.span
              animate={{
                y: [-15, 36],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-0 h-4 w-px bg-brand-accent"
            />

          </div>

        </div>

      </motion.div>

    </section>
  )
}

export default Hero