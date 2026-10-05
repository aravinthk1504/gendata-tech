import { motion } from "motion/react"


/* =========================================================
   AI MODEL VISUAL
========================================================= */

function ModelVisual() {
  const bars = [42, 65, 48, 82, 58, 92, 72, 54]

  return (
    <div className="relative mt-10 h-42 overflow-hidden rounded-2xl border border-white/8 bg-white/3">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute inset-x-6 bottom-5 flex h-28 items-end justify-between gap-2">

        {bars.map((height, index) => (
          <motion.div
            key={index}
            initial={{ height: "10%" }}
            whileInView={{ height: `${height}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.07,
            }}
            className="w-full rounded-t-sm bg-linear-to-t from-brand-primary/40 to-brand-accent"
          />
        ))}

      </div>

      <motion.div
        animate={{
          x: ["-20%", "120%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-y-0 w-20 bg-linear-to-r from-transparent via-blue-300/10 to-transparent"
      />

    </div>
  )
}


/* =========================================================
   AGENTIC AI VISUAL
========================================================= */

function AgentVisual() {
  return (
    <div className="relative mt-10 flex h-42 items-center justify-center">

      {/* Outer orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-34 w-34 rounded-full border border-blue-300/12"
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent shadow-[0_0_18px_rgba(5,124,250,1)]" />
      </motion.div>


      {/* Second orbit */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-24 w-24 rounded-full border border-blue-300/10"
      >
        <span className="absolute bottom-1 left-1 h-1.5 w-1.5 rounded-full bg-blue-300" />
      </motion.div>


      {/* Agent */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="relative z-10 flex h-18 w-18 items-center justify-center rounded-2xl border border-brand-accent/30 bg-brand-accent/10 shadow-[0_0_45px_rgba(5,124,250,0.15)]"
      >
        <span className="font-heading text-sm font-semibold text-white">
          AGENT
        </span>
      </motion.div>


      {/* Tool nodes */}

      <div className="absolute left-[12%] top-[18%] h-2 w-2 rounded-full bg-blue-300/70" />

      <div className="absolute right-[12%] top-[32%] h-2 w-2 rounded-full bg-brand-accent" />

      <div className="absolute bottom-[15%] left-[25%] h-2 w-2 rounded-full bg-blue-200/60" />

    </div>
  )
}


/* =========================================================
   AUTOMATION VISUAL
========================================================= */

function AutomationVisual() {
  const steps = ["Input", "AI", "Action"]

  return (
    <div className="mt-10 flex h-34 items-center justify-between">

      {steps.map((step, index) => (
        <div
          key={step}
          className="flex flex-1 items-center"
        >

          <motion.div
            whileHover={{
              y: -4,
            }}
            className="relative z-10 flex h-16 min-w-16 items-center justify-center rounded-xl border border-white/10 bg-white/4 px-3"
          >
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300">
              {step}
            </span>
          </motion.div>


          {index !== steps.length - 1 && (
            <div className="relative mx-2 h-px flex-1 overflow-hidden bg-white/10">

              <motion.span
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-0 top-0 h-px w-1/2 bg-linear-to-r from-transparent via-brand-accent to-transparent"
              />

            </div>
          )}

        </div>
      ))}

    </div>
  )
}


/* =========================================================
   CUSTOM AI VISUAL
========================================================= */

function CustomAIVisual() {
  const nodes = [
    { x: "50%", y: "15%" },
    { x: "20%", y: "48%" },
    { x: "80%", y: "48%" },
    { x: "35%", y: "82%" },
    { x: "65%", y: "82%" },
  ]

  return (
    <div className="relative mt-8 h-38">

      {/* Connections */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 150"
        preserveAspectRatio="none"
      >
        <line
          x1="200"
          y1="25"
          x2="80"
          y2="72"
          stroke="rgba(5,124,250,.20)"
        />

        <line
          x1="200"
          y1="25"
          x2="320"
          y2="72"
          stroke="rgba(5,124,250,.20)"
        />

        <line
          x1="80"
          y1="72"
          x2="140"
          y2="123"
          stroke="rgba(5,124,250,.15)"
        />

        <line
          x1="320"
          y1="72"
          x2="260"
          y2="123"
          stroke="rgba(5,124,250,.15)"
        />

        <line
          x1="140"
          y1="123"
          x2="260"
          y2="123"
          stroke="rgba(5,124,250,.12)"
        />
      </svg>


      {nodes.map((node, index) => (
        <motion.div
          key={index}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            delay: index * 0.4,
            repeat: Infinity,
          }}
          style={{
            left: node.x,
            top: node.y,
          }}
          className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/50 bg-brand-accent shadow-[0_0_20px_rgba(5,124,250,0.45)]"
        />
      ))}

    </div>
  )
}


/* =========================================================
   MAIN AI CAPABILITIES SECTION
========================================================= */

function AICapabilities() {
  return (
    <section className="relative overflow-hidden bg-[#030b18] px-6 py-28 lg:px-10 lg:py-36">

      {/* Ambient glow */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-100 w-200 -translate-x-1/2 rounded-full bg-brand-primary/8 blur-[160px]" />


      <div className="relative mx-auto max-w-350">

        {/* ========================================
            SECTION HEADING
        ======================================== */}

        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">

          <div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-accent"
            >
              Our AI Capabilities
            </motion.p>


            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.08,
              }}
              className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl"
            >
              Intelligence engineered
              <span className="block text-slate-400">
                for real-world impact.
              </span>
            </motion.h2>

          </div>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl font-body text-sm leading-7 text-slate-400 lg:justify-self-end lg:text-base"
          >
            From purpose-built AI models to autonomous agents and intelligent
            automation, we develop AI systems designed around specific
            challenges, workflows and goals.
          </motion.p>

        </div>



        {/* ========================================
            BENTO GRID
        ======================================== */}

        <div className="grid gap-4 lg:grid-cols-12">


          {/* AI MODEL DEVELOPMENT */}

          <motion.article
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            whileHover={{
              y: -4,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/3 p-7 lg:col-span-7 lg:p-9"
          >

            <div className="absolute right-0 top-0 h-50 w-50 rounded-full bg-brand-accent/8 blur-[90px] transition duration-500 group-hover:bg-brand-accent/12" />

            <div className="relative">

              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent">
                01 / Models
              </span>

              <h3 className="mt-5 font-heading text-2xl font-semibold text-white sm:text-3xl">
                AI Model Development
              </h3>

              <p className="mt-4 max-w-xl font-body text-sm leading-7 text-slate-400">
                Purpose-built machine learning and AI models engineered
                around specific data, problems and operational requirements.
              </p>

              <ModelVisual />

            </div>

          </motion.article>



          {/* AGENTIC AI */}

          <motion.article
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: 0.08,
            }}
            whileHover={{
              y: -4,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/3 p-7 lg:col-span-5 lg:p-9"
          >

            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent">
              02 / Agents
            </span>

            <h3 className="mt-5 font-heading text-2xl font-semibold text-white sm:text-3xl">
              Agentic AI
            </h3>

            <p className="mt-4 font-body text-sm leading-7 text-slate-400">
              Intelligent agents capable of reasoning, interacting with
              tools and executing multi-step workflows.
            </p>

            <AgentVisual />

          </motion.article>



          {/* AI AUTOMATION */}

          <motion.article
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: 0.12,
            }}
            whileHover={{
              y: -4,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/3 p-7 lg:col-span-5 lg:p-9"
          >

            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent">
              03 / Automation
            </span>

            <h3 className="mt-5 font-heading text-2xl font-semibold text-white sm:text-3xl">
              AI Automation
            </h3>

            <p className="mt-4 font-body text-sm leading-7 text-slate-400">
              AI-driven workflows that connect information, decisions and
              actions to reduce repetitive work.
            </p>

            <AutomationVisual />

          </motion.article>



          {/* CUSTOM AI */}

          <motion.article
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: 0.18,
            }}
            whileHover={{
              y: -4,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/8 bg-linear-to-br from-brand-primary/12 to-white/3 p-7 lg:col-span-7 lg:p-9"
          >

            <div className="grid gap-5 sm:grid-cols-2 sm:items-center">

              <div>

                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent">
                  04 / Custom Intelligence
                </span>

                <h3 className="mt-5 font-heading text-2xl font-semibold text-white sm:text-3xl">
                  Custom AI Solutions
                </h3>

                <p className="mt-4 font-body text-sm leading-7 text-slate-400">
                  AI systems designed around your specific business
                  requirements rather than forcing your problem into a
                  one-size-fits-all solution.
                </p>

              </div>

              <CustomAIVisual />

            </div>

          </motion.article>

        </div>

      </div>

    </section>
  )
}

export default AICapabilities