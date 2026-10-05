import { motion } from "motion/react"

const stages = [
  {
    number: "01",
    title: "Discover",
    label: "Understand",
    description:
      "We begin by understanding the problem, business objective, workflow and the role intelligence can play.",
  },
  {
    number: "02",
    title: "Data",
    label: "Prepare",
    description:
      "Relevant data, knowledge and system inputs are identified, structured and prepared for the AI solution.",
  },
  {
    number: "03",
    title: "Model",
    label: "Build",
    description:
      "We develop or integrate the models needed to understand, predict, generate or make intelligent decisions.",
  },
  {
    number: "04",
    title: "Reasoning",
    label: "Think",
    description:
      "Models are connected with context, tools and logic to create systems capable of reasoning through tasks.",
  },
  {
    number: "05",
    title: "Automation",
    label: "Act",
    description:
      "Intelligence is connected to workflows so the system can trigger actions, interact with tools and automate processes.",
  },
  {
    number: "06",
    title: "Deploy",
    label: "Scale",
    description:
      "The final AI system is integrated into the required product or workflow with reliability and scalability in mind.",
  },
]


function PipelineNode({ stage, index }) {
  return (
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
        amount: 0.3,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
      }}
      className="group relative"
    >

      {/* NODE */}

      <div className="relative z-10 mb-7 flex items-center lg:mb-10">

        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand-accent/30 bg-[#06152c]"
        >

          {/* Glow */}

          <div className="absolute inset-0 rounded-full bg-brand-accent/10 blur-xl opacity-0 transition duration-500 group-hover:opacity-100" />


          <span className="relative font-heading text-xs font-semibold text-blue-100">
            {stage.number}
          </span>


          {/* Pulse */}

          <motion.span
            animate={{
              scale: [1, 1.7, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 3,
              delay: index * 0.35,
              repeat: Infinity,
            }}
            className="absolute h-3 w-3 rounded-full border border-brand-accent/50"
          />

        </motion.div>


        {/* MOBILE CONNECTION */}

        {index !== stages.length - 1 && (
          <div className="relative ml-4 h-px flex-1 overflow-hidden bg-white/8 lg:hidden">

            <motion.span
              animate={{
                x: ["-100%", "250%"],
              }}
              transition={{
                duration: 2.5,
                delay: index * 0.3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-px w-1/3 bg-linear-to-r from-transparent via-brand-accent to-transparent"
            />

          </div>
        )}

      </div>


      {/* CONTENT */}

      <div>

        <p className="font-body text-[9px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
          {stage.label}
        </p>

        <h3 className="mt-3 font-heading text-xl font-semibold text-white">
          {stage.title}
        </h3>

        <p className="mt-4 font-body text-sm leading-7 text-slate-400">
          {stage.description}
        </p>

      </div>

    </motion.article>
  )
}



function IntelligenceProcess() {
  return (
    <section className="relative overflow-hidden bg-[#06152c] px-6 py-28 lg:px-10 lg:py-36">

      {/* ========================================
          BACKGROUND EFFECTS
      ======================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-120 w-120 rounded-full bg-brand-primary/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-130 w-130 rounded-full bg-brand-accent/8 blur-[160px]" />


      {/* Technical grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.15) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.15) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "64px 64px",
        }}
      />


      <div className="relative mx-auto max-w-350">

        {/* ========================================
            HEADING
        ======================================== */}

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-8">

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-accent"
            >
              How We Build Intelligence
            </motion.p>


            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.08,
              }}
              className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
            >
              From challenge
              <span className="block text-slate-400">
                to intelligent system.
              </span>
            </motion.h2>

          </div>


          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="max-w-md font-body text-sm leading-7 text-slate-400 lg:col-span-4 lg:justify-self-end lg:text-base"
          >
            Our AI development approach connects business understanding,
            data, models, reasoning and automation into one practical
            engineering process.
          </motion.p>

        </div>



        {/* ========================================
            PIPELINE
        ======================================== */}

        <div className="relative mt-20">


          {/* DESKTOP BASE CONNECTION */}

          <div className="absolute left-7 right-7 top-7 hidden h-px bg-white/8 lg:block" />


          {/* DESKTOP ACTIVE SIGNAL */}

          <div className="absolute left-7 right-7 top-7 hidden h-px overflow-hidden lg:block">

            <motion.div
              animate={{
                x: ["-15%", "115%"],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-px w-[18%] bg-linear-to-r from-transparent via-brand-accent to-transparent shadow-[0_0_12px_rgba(5,124,250,0.8)]"
            />

          </div>


          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6 lg:gap-6">

            {stages.map((stage, index) => (
              <PipelineNode
                key={stage.title}
                stage={stage}
                index={index}
              />
            ))}

          </div>

        </div>



        {/* ========================================
            SYSTEM OUTPUT
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-24 overflow-hidden rounded-3xl border border-white/8 bg-white/3 px-7 py-8 sm:px-9 lg:px-12 lg:py-10"
        >

          <div className="absolute right-0 top-1/2 h-50 w-50 -translate-y-1/2 rounded-full bg-brand-accent/10 blur-[90px]" />


          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
                The Outcome
              </p>

              <h3 className="mt-4 max-w-3xl font-heading text-2xl font-semibold leading-snug text-white sm:text-3xl">
                AI designed around the problem,
                not technology for technology's sake.
              </h3>

            </div>


            {/* Animated output status */}

            <div className="flex items-center gap-4">

              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-brand-accent/30 bg-brand-accent/10">

                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.4, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="h-2.5 w-2.5 rounded-full bg-brand-accent shadow-[0_0_18px_rgba(5,124,250,0.9)]"
                />

              </div>


              <div>

                <p className="font-heading text-sm font-semibold text-white">
                  Intelligent System
                </p>

                <p className="mt-1 font-body text-xs text-slate-500">
                  Ready for real-world use
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default IntelligenceProcess