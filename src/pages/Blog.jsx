import { useState } from "react"
import { motion } from "motion/react"

import Navbar from "../components/Navbar"
import BlogCard from "../components/blog/BlogCard"

import { blogPosts } from "../data/blogData"


function Blog() {

  const [activeCategory, setActiveCategory] = useState("All")


  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ]


  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter(
          (post) => post.category === activeCategory
        )


  return (
    <>
      <Navbar />


      <main>

       

      {/* =========================================
             BLOG HERO — ANIMATED KNOWLEDGE NETWORK
        ========================================= */}

        <section className="relative min-h-[680px] overflow-hidden bg-[#06152c] px-6 pb-24 pt-40 lg:px-10 lg:pb-30 lg:pt-48">

  {/* =====================================
      AMBIENT BACKGROUND
  ====================================== */}

  <motion.div
    animate={{
      x: [0, 50, 0],
      y: [0, 30, 0],
      scale: [1, 1.12, 1],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -left-50 -top-30 h-[520px] w-[520px] rounded-full bg-brand-primary/20 blur-[150px]"
  />

  <motion.div
    animate={{
      x: [0, -40, 0],
      y: [0, -35, 0],
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 17,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -bottom-50 -right-40 h-[560px] w-[560px] rounded-full bg-brand-accent/12 blur-[160px]"
  />


  {/* =====================================
      TECHNICAL GRID
  ====================================== */}

  <div
    className="pointer-events-none absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage: `
        linear-gradient(
          rgba(255,255,255,.2) 1px,
          transparent 1px
        ),
        linear-gradient(
          90deg,
          rgba(255,255,255,.2) 1px,
          transparent 1px
        )
      `,
      backgroundSize: "70px 70px",
    }}
  />


  {/* =====================================
      FADE GRID EDGES
  ====================================== */}

  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#06152c_80%)]" />


  <div className="relative mx-auto grid min-h-[480px] max-w-350 items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

    {/* =====================================
        LEFT — CONTENT
    ====================================== */}

    <div className="relative z-20">

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
          duration: 0.6,
        }}
        className="flex items-center gap-3"
      >

        {/* Live dot */}

        <span className="relative flex h-2 w-2">

          <motion.span
            animate={{
              scale: [1, 2.2, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="absolute inline-flex h-full w-full rounded-full bg-brand-accent"
          />

          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-accent" />

        </span>


        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-accent">
          GenData Tech / Insights
        </p>

      </motion.div>


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
          duration: 0.8,
          delay: 0.1,
        }}
        className="mt-7 max-w-4xl font-heading text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl xl:text-[82px]"
      >
        Insights

        <span className="block">
          &{" "}

          <span className="relative text-slate-400">

            Ideas.

            {/* animated underline */}

            <motion.span
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: "easeOut",
              }}
              className="absolute -bottom-2 left-0 h-px w-full origin-left bg-linear-to-r from-brand-accent via-cyan-300 to-transparent"
            />

          </span>

        </span>

      </motion.h1>


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
          duration: 0.7,
          delay: 0.25,
        }}
        className="mt-8 max-w-xl font-body text-base leading-8 text-slate-400"
      >
        Exploring artificial intelligence, software engineering,
        connected technology and the ideas shaping intelligent
        digital systems.
      </motion.p>


      {/* Topics */}

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
          duration: 0.7,
          delay: 0.4,
        }}
        className="mt-9 flex flex-wrap gap-2"
      >

        {[
          "Artificial Intelligence",
          "Agentic AI",
          "Automation",
          "Software",
          "IoT",
        ].map((topic) => (

          <span
            key={topic}
            className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 font-body text-[9px] font-medium text-slate-300 backdrop-blur-md transition duration-300 hover:border-brand-accent/40 hover:bg-brand-accent/10 hover:text-white"
          >
            {topic}
          </span>

        ))}

      </motion.div>

    </div>



    {/* =====================================
        RIGHT — KNOWLEDGE NETWORK
    ====================================== */}

    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
        delay: 0.25,
      }}
      className="relative hidden h-[480px] lg:block"
    >

      {/* Outer orbit */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.07]"
      >

        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent shadow-[0_0_20px_rgba(5,124,250,1)]" />

        <span className="absolute bottom-[12%] left-[8%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,.8)]" />

      </motion.div>


      {/* Inner orbit */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
      >

        <span className="absolute right-[7%] top-[20%] h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,.8)]" />

      </motion.div>


      {/* =====================================
          CONNECTION LINES
      ====================================== */}

      <svg
        viewBox="0 0 500 480"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >

        <defs>

          <linearGradient
            id="networkLine"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#057CFA"
              stopOpacity="0"
            />

            <stop
              offset="50%"
              stopColor="#057CFA"
              stopOpacity="0.55"
            />

            <stop
              offset="100%"
              stopColor="#67E8F9"
              stopOpacity="0"
            />
          </linearGradient>

        </defs>


        {/* Static connections */}

        <path
          d="M250 240 L105 105"
          stroke="rgba(255,255,255,.08)"
        />

        <path
          d="M250 240 L400 115"
          stroke="rgba(255,255,255,.08)"
        />

        <path
          d="M250 240 L425 330"
          stroke="rgba(255,255,255,.08)"
        />

        <path
          d="M250 240 L125 365"
          stroke="rgba(255,255,255,.08)"
        />


        {/* Animated signal */}

        <motion.path
          d="M250 240 L105 105"
          stroke="url(#networkLine)"
          strokeWidth="2"
          strokeDasharray="35 170"
          animate={{
            strokeDashoffset: [205, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />


        <motion.path
          d="M250 240 L400 115"
          stroke="url(#networkLine)"
          strokeWidth="2"
          strokeDasharray="35 170"
          animate={{
            strokeDashoffset: [205, 0],
          }}
          transition={{
            duration: 3.5,
            delay: 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />


        <motion.path
          d="M250 240 L425 330"
          stroke="url(#networkLine)"
          strokeWidth="2"
          strokeDasharray="35 170"
          animate={{
            strokeDashoffset: [205, 0],
          }}
          transition={{
            duration: 3,
            delay: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />


        <motion.path
          d="M250 240 L125 365"
          stroke="url(#networkLine)"
          strokeWidth="2"
          strokeDasharray="35 170"
          animate={{
            strokeDashoffset: [205, 0],
          }}
          transition={{
            duration: 4,
            delay: 1.4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

      </svg>



      {/* =====================================
          CENTRAL INTELLIGENCE NODE
      ====================================== */}

      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
      >

        {/* pulse */}

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-[30px] border border-brand-accent/40"
        />


        <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-[28px] border border-brand-accent/30 bg-[#0a1d3a]/90 shadow-[0_0_60px_rgba(5,124,250,.18)] backdrop-blur-xl">

          <motion.span
            animate={{
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="h-3 w-3 rounded-full bg-brand-accent shadow-[0_0_25px_rgba(5,124,250,1)]"
          />

          <span className="mt-3 font-body text-[8px] font-semibold uppercase tracking-[0.2em] text-blue-100">
            Knowledge
          </span>

          <span className="mt-1 font-heading text-xs font-semibold text-white">
            Intelligence
          </span>

        </div>

      </motion.div>



      {/* =====================================
          TOPIC NODES
      ====================================== */}


      {/* AI */}

      <motion.div
        animate={{
          y: [0, -8, 0],
          x: [0, 3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[6%] top-[10%] rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 backdrop-blur-xl"
      >

        <p className="font-body text-[7px] uppercase tracking-[0.18em] text-brand-accent">
          Explore
        </p>

        <p className="mt-1 font-heading text-sm font-semibold text-white">
          AI
        </p>

      </motion.div>


      {/* AGENTIC */}

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          delay: 0.7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[3%] top-[12%] rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 backdrop-blur-xl"
      >

        <p className="font-body text-[7px] uppercase tracking-[0.18em] text-cyan-300">
          Think
        </p>

        <p className="mt-1 font-heading text-sm font-semibold text-white">
          Agentic AI
        </p>

      </motion.div>


      {/* SOFTWARE */}

      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 5.5,
          delay: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[7%] left-[10%] rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 backdrop-blur-xl"
      >

        <p className="font-body text-[7px] uppercase tracking-[0.18em] text-violet-300">
          Build
        </p>

        <p className="mt-1 font-heading text-sm font-semibold text-white">
          Software
        </p>

      </motion.div>


      {/* IOT */}

      <motion.div
        animate={{
          y: [0, 7, 0],
          x: [0, -3, 0],
        }}
        transition={{
          duration: 6.5,
          delay: 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[12%] right-[0%] rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 backdrop-blur-xl"
      >

        <p className="font-body text-[7px] uppercase tracking-[0.18em] text-emerald-300">
          Connect
        </p>

        <p className="mt-1 font-heading text-sm font-semibold text-white">
          IoT
        </p>

      </motion.div>

    </motion.div>

  </div>



  {/* =====================================
      BOTTOM SCROLL INDICATOR
  ====================================== */}

  <motion.div
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      delay: 1,
    }}
    className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex"
  >

    <span className="font-body text-[8px] font-semibold uppercase tracking-[0.22em] text-slate-600">
      Explore insights
    </span>


    <div className="relative h-8 w-px overflow-hidden bg-white/10">

      <motion.span
        animate={{
          y: ["-100%", "180%"],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-1/2 w-px bg-brand-accent"
      />

    </div>

  </motion.div>

</section>


        {/* =========================================
            BLOG CONTENT
        ========================================= */}

        <section className="bg-[#F7F9FC] px-6 py-24 lg:px-10 lg:py-30">

          <div className="mx-auto max-w-350">


            {/* CATEGORY FILTER */}

            <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-7">

              {categories.map((category) => (

                <button
                  key={category}
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`rounded-full px-4 py-2 font-body text-[10px] font-semibold transition duration-300 ${
                    activeCategory === category
                      ? "bg-brand-primary text-white"
                      : "border border-slate-200 bg-white text-slate-500 hover:border-blue-200 hover:text-brand-primary"
                  }`}
                >
                  {category}
                </button>

              ))}

            </div>



            {/* ARTICLE COUNT */}

            <div className="mt-10 flex items-center justify-between">

              <p className="font-body text-xs text-slate-500">
                Showing{" "}
                <span className="font-semibold text-slate-900">
                  {filteredPosts.length}
                </span>{" "}
                insights
              </p>

            </div>



            {/* ARTICLES */}

            <div className="mt-10 grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">

              {filteredPosts.map((post, index) => (

                <BlogCard
                  key={post.id}
                  post={post}
                  index={index}
                />

              ))}

            </div>

          </div>

        </section>

      </main>
    </>
  )
}

export default Blog