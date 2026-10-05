import { motion } from "motion/react"
import { Link } from "react-router-dom"


/* =========================================================
   FULL STACK VISUAL
========================================================= */

function FullStackVisual() {
  const layers = [
    { name: "Frontend", sub: "UI / Web" },
    { name: "API", sub: "Integration" },
    { name: "Backend", sub: "Logic" },
    { name: "Database", sub: "Data" },
  ]

  return (
    <div className="relative flex min-h-70 items-center justify-center overflow-hidden">

      {/* Soft glow */}
      <div className="absolute h-60 w-60 rounded-full bg-blue-100/70 blur-[80px]" />

      <div className="relative z-10 flex w-full max-w-xl items-center justify-center">

        {layers.map((layer, index) => (
          <div key={layer.name} className="flex items-center">

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className={`relative flex h-22 w-25 flex-col items-center justify-center rounded-2xl border bg-white shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:w-28 ${
                index === 0
                  ? "border-brand-accent/30"
                  : "border-slate-200"
              }`}
            >
              <span
                className={`font-heading text-xs font-semibold ${
                  index === 0
                    ? "text-brand-primary"
                    : "text-slate-800"
                }`}
              >
                {layer.name}
              </span>

              <span className="mt-1 font-body text-[9px] text-slate-400">
                {layer.sub}
              </span>

              {index === 0 && (
                <span className="absolute -top-1 h-2 w-2 rounded-full bg-brand-accent shadow-[0_0_15px_rgba(5,124,250,0.8)]" />
              )}
            </motion.div>


            {index !== layers.length - 1 && (
              <div className="relative h-px w-5 overflow-hidden bg-slate-200 sm:w-8">

                <motion.span
                  animate={{
                    x: ["-100%", "250%"],
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-px w-1/2 bg-brand-accent"
                />

              </div>
            )}

          </div>
        ))}

      </div>

    </div>
  )
}


/* =========================================================
   SOFTWARE VISUAL
========================================================= */

function SoftwareVisual() {
  const modules = ["Module A", "Module B", "Module C"]

  return (
    <div className="relative mt-8 flex h-44 items-center justify-center">

      <div className="absolute left-0 flex flex-col gap-3">

        {modules.map((module, index) => (
          <motion.div
            key={module}
            animate={{
              x: [0, 4, 0],
            }}
            transition={{
              duration: 3,
              delay: index * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-9 w-20 items-center justify-center rounded-lg border border-slate-200 bg-white font-body text-[8px] font-semibold uppercase tracking-[0.1em] text-slate-500 shadow-sm"
          >
            {module}
          </motion.div>
        ))}

      </div>


      <div className="absolute left-[32%] h-px w-[16%] bg-slate-200" />


      <motion.div
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-primary shadow-[0_15px_40px_rgba(0,45,204,0.18)]"
      >
        <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
          Core
        </span>
      </motion.div>


      <div className="absolute right-[22%] h-px w-[16%] overflow-hidden bg-slate-200">

        <motion.span
          animate={{
            x: ["-100%", "250%"],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-px w-1/2 bg-brand-accent"
        />

      </div>


      <div className="absolute right-0 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50">
        <span className="font-heading text-[9px] font-semibold uppercase tracking-[0.1em] text-brand-primary">
          Data
        </span>
      </div>

    </div>
  )
}


/* =========================================================
   APP DEVELOPMENT VISUAL
========================================================= */

function AppVisual() {
  return (
    <div className="relative mt-8 flex h-44 items-center justify-center">

      {/* Android */}
      <motion.div
        animate={{
          y: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[12%] flex h-27 w-17 items-center justify-center rounded-[18px] border-2 border-slate-800 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
      >
        <div className="text-center">

          <div className="mx-auto h-7 w-7 rounded-lg bg-blue-50" />

          <p className="mt-2 font-body text-[7px] font-semibold uppercase tracking-[0.1em] text-slate-500">
            Android
          </p>

        </div>
      </motion.div>


      {/* Connection left */}
      <div className="absolute left-[31%] h-px w-[15%] bg-slate-200" />


      {/* Core */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 0 rgba(5,124,250,0)",
            "0 0 30px rgba(5,124,250,0.18)",
            "0 0 0 rgba(5,124,250,0)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-brand-primary to-brand-accent"
      >
        <span className="text-center font-heading text-[9px] font-semibold uppercase tracking-[0.1em] text-white">
          App
          <br />
          Core
        </span>
      </motion.div>


      {/* Connection right */}
      <div className="absolute right-[31%] h-px w-[15%] bg-slate-200" />


      {/* iOS */}
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[12%] flex h-27 w-17 items-center justify-center rounded-[18px] border-2 border-slate-800 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
      >
        <div className="text-center">

          <div className="mx-auto h-7 w-7 rounded-full bg-slate-100" />

          <p className="mt-2 font-body text-[7px] font-semibold uppercase tracking-[0.1em] text-slate-500">
            iOS
          </p>

        </div>
      </motion.div>

    </div>
  )
}


/* =========================================================
   IOT VISUAL
========================================================= */

function IoTVisual() {
  const items = [
    { title: "Sensor", label: "Input" },
    { title: "Device", label: "Edge" },
    { title: "Cloud", label: "Connect" },
    { title: "AI", label: "Intelligence" },
  ]

  return (
    <div className="relative flex min-h-65 items-center justify-center">

      <div className="absolute h-55 w-55 rounded-full bg-blue-100/60 blur-[80px]" />


      <div className="relative z-10 flex w-full max-w-lg items-center justify-center">

        {items.map((item, index) => (
          <div
            key={item.title}
            className="flex items-center"
          >

            <motion.div
              animate={
                index === 3
                  ? {
                      scale: [1, 1.07, 1],
                    }
                  : {}
              }
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className={`flex h-18 w-18 flex-col items-center justify-center rounded-full border sm:h-20 sm:w-20 ${
                index === 3
                  ? "border-brand-accent bg-brand-primary text-white shadow-[0_12px_35px_rgba(0,45,204,0.2)]"
                  : "border-slate-200 bg-white text-slate-700 shadow-sm"
              }`}
            >
              <span className="font-heading text-[9px] font-semibold uppercase tracking-[0.08em]">
                {item.title}
              </span>

              <span
                className={`mt-1 font-body text-[7px] ${
                  index === 3
                    ? "text-blue-100"
                    : "text-slate-400"
                }`}
              >
                {item.label}
              </span>
            </motion.div>


            {index !== items.length - 1 && (
              <div className="relative h-px w-5 overflow-hidden bg-slate-200 sm:w-9">

                <motion.span
                  animate={{
                    x: ["-100%", "250%"],
                  }}
                  transition={{
                    duration: 1.8,
                    delay: index * 0.35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-px w-1/2 bg-brand-accent"
                />

              </div>
            )}

          </div>
        ))}

      </div>

    </div>
  )
}


/* =========================================================
   TECHNOLOGY SERVICES
========================================================= */

function TechnologyServices() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] px-6 py-28 lg:px-10 lg:py-36">

      {/* Soft ambient background */}
      <div className="pointer-events-none absolute -right-60 top-0 h-150 w-150 rounded-full bg-blue-100/50 blur-[160px]" />

      <div className="pointer-events-none absolute -left-60 bottom-0 h-130 w-130 rounded-full bg-indigo-50/50 blur-[150px]" />


      {/* Very subtle technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#002dcc 1px, transparent 1px),
            linear-gradient(90deg, #002dcc 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />


      <div className="relative mx-auto max-w-350">

        {/* ========================================
            SECTION HEADING
        ======================================== */}

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-8">

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-primary"
            >
              Technology Capabilities
            </motion.p>


            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl"
            >
              Engineering the technology

              <span className="block text-slate-400">
                behind intelligent products.
              </span>

            </motion.h2>

          </div>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md font-body text-sm leading-7 text-slate-500 lg:col-span-4 lg:justify-self-end lg:text-base"
          >
            From digital platforms to connected devices, our engineering
            capabilities turn ideas and intelligence into reliable,
            real-world technology.
          </motion.p>

        </div>



        {/* ========================================
            CAPABILITY GRID
        ======================================== */}

        <div className="mt-20 grid gap-5 lg:grid-cols-2">


          {/* FULL STACK — LARGE */}

          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.035)] transition duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(15,23,42,0.07)] lg:col-span-2 lg:p-10"
          >

            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

              <div>

                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  01 / Full Stack
                </span>

                <h3 className="mt-5 font-heading text-3xl font-semibold tracking-[-0.03em] text-slate-950 lg:text-4xl">
                  Full Stack Development
                </h3>

                <p className="mt-5 max-w-xl font-body text-sm leading-7 text-slate-500">
                  From static and multi-page websites to dynamic web
                  applications, we build complete frontend and backend
                  solutions with APIs, databases and scalable architecture.
                </p>


                <div className="mt-7 flex flex-wrap gap-2">

                  {[
                    "Frontend",
                    "Backend",
                    "APIs",
                    "Database",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-body text-[9px] font-semibold uppercase tracking-[0.1em] text-slate-500"
                    >
                      {item}
                    </span>
                  ))}

                </div>


                <Link
                  to="/services"
                  className="mt-8 inline-flex items-center gap-3 font-body text-xs font-semibold text-brand-primary"
                >
                  Explore capability

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </Link>

              </div>


              <FullStackVisual />

            </div>

          </motion.article>



          {/* SOFTWARE */}

          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="group rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.035)] transition duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(15,23,42,0.07)] lg:p-9"
          >

            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-primary">
              02 / Software
            </span>

            <h3 className="mt-5 font-heading text-2xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-3xl">
              Software Development
            </h3>

            <p className="mt-4 font-body text-sm leading-7 text-slate-500">
              Custom software solutions engineered around business
              processes, operational requirements and evolving digital
              needs.
            </p>

            <SoftwareVisual />

            <Link
              to="/services"
              className="inline-flex items-center gap-3 font-body text-xs font-semibold text-brand-primary"
            >
              Explore capability

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </motion.article>



          {/* APP DEVELOPMENT */}

          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="group rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.035)] transition duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(15,23,42,0.07)] lg:p-9"
          >

            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-primary">
              03 / Mobile
            </span>

            <h3 className="mt-5 font-heading text-2xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-3xl">
              App Development
            </h3>

            <p className="mt-4 font-body text-sm leading-7 text-slate-500">
              Modern mobile applications for Android and iOS designed
              around intuitive experiences, reliable performance and
              scalable integrations.
            </p>

            <AppVisual />

            <Link
              to="/services"
              className="inline-flex items-center gap-3 font-body text-xs font-semibold text-brand-primary"
            >
              Explore capability

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </motion.article>



          {/* IoT — WIDE */}

          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.035)] transition duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(15,23,42,0.07)] lg:col-span-2 lg:p-10"
          >

            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

              <div>

                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  04 / Connected Systems
                </span>

                <h3 className="mt-5 font-heading text-3xl font-semibold tracking-[-0.03em] text-slate-950 lg:text-4xl">
                  IoT Solutions
                </h3>

                <p className="mt-5 max-w-xl font-body text-sm leading-7 text-slate-500">
                  Connected IoT solutions combining sensors, devices,
                  cloud platforms, automation and intelligent monitoring
                  for real-world environments.
                </p>


                <div className="mt-7 flex flex-wrap gap-2">

                  {[
                    "Sensors",
                    "Edge",
                    "Cloud",
                    "Automation",
                    "AI",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-body text-[9px] font-semibold uppercase tracking-[0.1em] text-slate-500"
                    >
                      {item}
                    </span>
                  ))}

                </div>


                <Link
                  to="/services"
                  className="mt-8 inline-flex items-center gap-3 font-body text-xs font-semibold text-brand-primary"
                >
                  Explore capability

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>


              <IoTVisual />

            </div>

          </motion.article>

        </div>

      </div>

    </section>
  )
}

export default TechnologyServices