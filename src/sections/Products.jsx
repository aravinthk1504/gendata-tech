import { motion } from "motion/react"
import { Link } from "react-router-dom"


const products = [
  {
    id: "crm",
    number: "02",
    category: "Customer Management",
    title: "CRM",
    description:
      "A centralized platform for managing customer relationships, leads, communication and sales activities.",
    features: ["Leads", "Customers", "Pipeline"],
  },
  {
    id: "erp",
    number: "03",
    category: "Business Operations",
    title: "ERP",
    description:
      "An integrated system designed to connect core business operations, information and workflows in one platform.",
    features: ["Operations", "Resources", "Reports"],
  },
  {
    id: "billing",
    number: "04",
    category: "Finance & Billing",
    title: "Billing",
    description:
      "A streamlined billing platform for invoices, payments, customer records and financial visibility.",
    features: ["Invoices", "Payments", "Reports"],
  },
]


/* =========================================================
   LMS DASHBOARD VISUAL
========================================================= */

function LMSDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Ambient glow */}
      <div className="absolute inset-10 rounded-full bg-brand-accent/20 blur-[100px]" />

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0a1830] shadow-[0_35px_90px_rgba(0,0,0,0.35)]"
      >
        {/* Browser top */}
        <div className="flex h-11 items-center gap-2 border-b border-white/8 px-5">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />

          <div className="ml-5 h-2 w-28 rounded-full bg-white/8" />
        </div>

        <div className="grid min-h-80 grid-cols-[65px_1fr] sm:grid-cols-[90px_1fr]">

          {/* Sidebar */}
          <div className="border-r border-white/8 p-4">
            <div className="mx-auto h-7 w-7 rounded-lg bg-brand-accent" />

            <div className="mt-8 space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className={`mx-auto h-2 rounded-full ${
                    item === 1
                      ? "w-9 bg-brand-accent/60"
                      : "w-7 bg-white/8"
                  }`}
                />
              ))}
            </div>
          </div>


          {/* Dashboard */}
          <div className="p-5 sm:p-7">

            <div className="flex items-start justify-between">
              <div>
                <div className="h-2 w-18 rounded-full bg-white/15" />
                <div className="mt-3 h-4 w-32 rounded-full bg-white/80" />
              </div>

              <div className="h-8 w-8 rounded-full bg-blue-400/20" />
            </div>


            {/* Stats */}
            <div className="mt-7 grid grid-cols-3 gap-3">

              {[
                ["Courses", "24"],
                ["Students", "1.2K"],
                ["Progress", "84%"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/8 bg-white/4 p-3 sm:p-4"
                >
                  <p className="font-body text-[7px] uppercase tracking-[0.12em] text-slate-500">
                    {label}
                  </p>

                  <p className="mt-2 font-heading text-sm font-semibold text-white sm:text-lg">
                    {value}
                  </p>
                </div>
              ))}

            </div>


            {/* Analytics */}
            <div className="mt-4 grid gap-4 sm:grid-cols-[1.4fr_0.6fr]">

              <div className="relative h-32 overflow-hidden rounded-xl border border-white/8 bg-white/3 p-4">

                <p className="font-body text-[7px] uppercase tracking-[0.12em] text-slate-500">
                  Learning activity
                </p>

                <div className="absolute inset-x-4 bottom-4 flex h-18 items-end gap-2">

                  {[40, 62, 48, 76, 58, 88, 70].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.08,
                        }}
                        className="flex-1 rounded-t-sm bg-linear-to-t from-brand-primary to-brand-accent"
                      />
                    )
                  )}

                </div>
              </div>


              <div className="flex h-32 items-center justify-center rounded-xl border border-white/8 bg-white/3">

                <div className="relative flex h-19 w-19 items-center justify-center rounded-full border-[7px] border-white/8">

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-[-7px] rounded-full border-[7px] border-transparent border-t-brand-accent border-r-brand-accent"
                  />

                  <span className="font-heading text-xs font-semibold text-white">
                    84%
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </motion.div>
    </motion.div>
  )
}


/* =========================================================
   SMALL PRODUCT VISUAL
========================================================= */

function ProductVisual({ type }) {

  if (type === "crm") {
  const pipeline = [
    {
      label: "New Leads",
      value: "48",
      height: "48%",
      bar: "bg-[#057CFA]",
      soft: "bg-blue-50",
    },
    {
      label: "Qualified",
      value: "32",
      height: "68%",
      bar: "bg-cyan-400",
      soft: "bg-cyan-50",
    },
    {
      label: "Proposal",
      value: "21",
      height: "55%",
      bar: "bg-violet-500",
      soft: "bg-violet-50",
    },
    {
      label: "Won",
      value: "16",
      height: "88%",
      bar: "bg-emerald-400",
      soft: "bg-emerald-50",
    },
  ]

  return (
    <div className="relative mt-8 h-40 overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFD] p-5">

      {/* soft glow */}
      <div className="absolute -right-10 -top-10 h-30 w-30 rounded-full bg-cyan-100/70 blur-[45px]" />


      <div className="relative flex h-full gap-4">

        {/* Mini lead list */}

        <div className="hidden w-[34%] flex-col gap-2 sm:flex">

          {[
            ["AK", "New"],
            ["MS", "Hot"],
            ["RK", "Won"],
          ].map(([name, status], index) => (
            <motion.div
              key={name}
              animate={{
                x: [0, 3, 0],
              }}
              transition={{
                duration: 3,
                delay: index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2 shadow-sm"
            >
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full text-[6px] font-bold ${
                  index === 0
                    ? "bg-blue-100 text-blue-600"
                    : index === 1
                    ? "bg-violet-100 text-violet-600"
                    : "bg-emerald-100 text-emerald-600"
                }`}
              >
                {name}
              </div>

              <div className="min-w-0 flex-1">
                <div className="h-1.5 w-3/4 rounded-full bg-slate-200" />

                <p className="mt-1 font-body text-[6px] text-slate-400">
                  {status}
                </p>
              </div>

            </motion.div>
          ))}

        </div>


        {/* Pipeline chart */}

        <div className="flex flex-1 flex-col rounded-xl border border-slate-200 bg-white p-3">

          <div className="flex items-center justify-between">

            <div>
              <p className="font-body text-[6px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                Sales Pipeline
              </p>

              <p className="mt-1 font-heading text-[10px] font-semibold text-slate-800">
                Lead activity
              </p>
            </div>

            <span className="rounded-full bg-emerald-50 px-2 py-1 font-body text-[6px] font-semibold text-emerald-600">
              +18.4%
            </span>

          </div>


          <div className="mt-3 flex flex-1 items-end justify-between gap-2">

            {pipeline.map((item, index) => (
              <div
                key={item.label}
                className="flex h-full flex-1 flex-col justify-end"
              >

                <div className="relative flex flex-1 items-end">

                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    whileInView={{
                      height: item.height,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                    }}
                    className={`relative w-full overflow-hidden rounded-t-md ${item.bar}`}
                  >

                    <motion.div
                      animate={{
                        y: ["100%", "-100%"],
                      }}
                      transition={{
                        duration: 3,
                        delay: index * 0.3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-x-0 h-8 bg-linear-to-t from-transparent via-white/25 to-transparent"
                    />

                  </motion.div>

                </div>

                <p className="mt-1 text-center font-body text-[5px] text-slate-400">
                  {item.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

  if (type === "erp") {
    return (
      <div className="relative mt-8 flex h-36 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFD]">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-25 w-25 rounded-full border border-dashed border-brand-accent/30"
        />

        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary shadow-[0_12px_30px_rgba(0,45,204,0.18)]">
          <span className="font-heading text-[9px] font-semibold text-white">
            ERP
          </span>
        </div>

        {["HR", "OPS", "FIN", "DATA"].map((item, index) => {
          const positions = [
            "left-[12%] top-[20%]",
            "right-[12%] top-[20%]",
            "bottom-[14%] left-[18%]",
            "bottom-[14%] right-[18%]",
          ]

          return (
            <div
              key={item}
              className={`absolute ${positions[index]} flex h-9 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white font-body text-[7px] font-semibold text-slate-500 shadow-sm`}
            >
              {item}
            </div>
          )
        })}

      </div>
    )
  }


  return (
  <div className="relative mt-8 h-40 overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFD] p-5">

    {/* Background glow */}
    <div className="absolute -right-8 -top-8 h-30 w-30 rounded-full bg-emerald-100/70 blur-[45px]" />


    <div className="relative grid h-full grid-cols-[1fr_0.8fr] gap-3">

      {/* Revenue chart */}

      <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-3">

        <div className="flex items-start justify-between">

          <div>
            <p className="font-body text-[6px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Revenue
            </p>

            <p className="mt-1 font-heading text-[11px] font-semibold text-slate-800">
              ₹84.2K
            </p>
          </div>

          <span className="rounded-full bg-emerald-50 px-2 py-1 font-body text-[6px] font-semibold text-emerald-600">
            +12.8%
          </span>

        </div>


        <div className="mt-3 flex flex-1 items-end gap-1.5">

          {[
            { height: "38%", color: "bg-blue-400" },
            { height: "58%", color: "bg-cyan-400" },
            { height: "46%", color: "bg-violet-400" },
            { height: "76%", color: "bg-blue-500" },
            { height: "64%", color: "bg-cyan-500" },
            { height: "90%", color: "bg-emerald-400" },
          ].map((bar, index) => (

            <motion.div
              key={index}
              initial={{
                height: 0,
              }}
              whileInView={{
                height: bar.height,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              className={`relative flex-1 overflow-hidden rounded-t-sm ${bar.color}`}
            >

              <motion.span
                animate={{
                  y: ["100%", "-100%"],
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-x-0 h-7 bg-linear-to-t from-transparent via-white/25 to-transparent"
              />

            </motion.div>

          ))}

        </div>

      </div>


      {/* Invoice status */}

      <motion.div
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
      >

        <div className="flex items-center justify-between">

          <div className="h-2 w-10 rounded-full bg-slate-200" />

          <span className="rounded-full bg-emerald-50 px-2 py-1 font-body text-[5px] font-bold uppercase text-emerald-600">
            Paid
          </span>

        </div>


        <p className="mt-3 font-heading text-[10px] font-semibold text-slate-800">
          INV-2048
        </p>


        <div className="mt-3 space-y-2">

          <div className="flex justify-between">
            <div className="h-1.5 w-8 rounded bg-blue-100" />
            <div className="h-1.5 w-6 rounded bg-blue-400" />
          </div>

          <div className="flex justify-between">
            <div className="h-1.5 w-10 rounded bg-violet-100" />
            <div className="h-1.5 w-7 rounded bg-violet-400" />
          </div>

          <div className="flex justify-between">
            <div className="h-1.5 w-7 rounded bg-cyan-100" />
            <div className="h-1.5 w-8 rounded bg-cyan-400" />
          </div>

        </div>


        <div className="mt-auto border-t border-slate-100 pt-2">

          <div className="flex items-center justify-between">

            <span className="font-body text-[5px] uppercase text-slate-400">
              Total
            </span>

            <span className="font-heading text-[9px] font-semibold text-slate-800">
              ₹12,450
            </span>

          </div>

        </div>

      </motion.div>

    </div>

  </div>
)
}


/* =========================================================
   PRODUCTS SECTION
========================================================= */

function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white px-6 py-28 lg:px-10 lg:py-36"
    >

      <div className="pointer-events-none absolute left-1/2 top-0 h-100 w-200 -translate-x-1/2 rounded-full bg-blue-50 blur-[140px]" />


      <div className="relative mx-auto max-w-350">

        {/* SECTION HEADER */}

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-8">

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-primary"
            >
              GenData Products
            </motion.p>


            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl"
            >
              Software built for

              <span className="block text-slate-400">
                how businesses actually work.
              </span>
            </motion.h2>

          </div>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md font-body text-sm leading-7 text-slate-500 lg:col-span-4 lg:justify-self-end lg:text-base"
          >
            A growing suite of digital products designed to simplify
            learning, customer management, business operations and
            financial workflows.
          </motion.p>

        </div>



        {/* =================================================
            FEATURED LMS
        ================================================= */}

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75 }}
          className="relative mt-20 overflow-hidden rounded-[32px] bg-[#06152c] p-7 sm:p-10 lg:p-14"
        >

          {/* Background */}
          <div className="absolute -left-30 bottom-0 h-100 w-100 rounded-full bg-brand-primary/20 blur-[120px]" />

          <div className="absolute -right-20 top-0 h-100 w-100 rounded-full bg-brand-accent/12 blur-[130px]" />


          <div className="relative grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* Content */}
            <div>

              <div className="flex flex-wrap items-center gap-3">

                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent">
                  01 / Learning Platform
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-body text-[8px] font-semibold uppercase tracking-[0.15em] text-blue-100">
                  LMS
                </span>

              </div>


              <h3 className="mt-7 font-heading text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                GenData LMS
              </h3>


              <p className="mt-5 max-w-xl font-body text-sm leading-7 text-slate-400 sm:text-base">
                A modern learning management platform designed to organize
                courses, manage learners, track progress and simplify
                digital training experiences.
              </p>


              <div className="mt-8 flex flex-wrap gap-2">

                {[
                  "Course Management",
                  "Learners",
                  "Progress Tracking",
                  "Analytics",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/4 px-3 py-2 font-body text-[9px] font-medium text-slate-300"
                  >
                    {item}
                  </span>
                ))}

              </div>


              <Link
                to="/products/lms"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-brand-accent px-6 py-3.5 font-body text-xs font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Explore Product

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>


            <LMSDashboard />

          </div>

        </motion.article>



        {/* =================================================
            OTHER PRODUCTS
        ================================================= */}

        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {products.map((product, index) => (

            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
              }}
              className="group flex flex-col rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.035)] transition duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(15,23,42,0.07)] lg:p-8"
            >

              <div className="flex items-center justify-between">

                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  {product.number}
                </span>

                <span className="font-body text-[8px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                  {product.category}
                </span>

              </div>


              <h3 className="mt-7 font-heading text-3xl font-semibold tracking-[-0.03em] text-slate-950">
                GenData {product.title}
              </h3>


              <p className="mt-4 font-body text-sm leading-7 text-slate-500">
                {product.description}
              </p>


              <ProductVisual type={product.id} />


              <div className="mt-6 flex flex-wrap gap-2">

                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-slate-50 px-3 py-1.5 font-body text-[8px] font-semibold uppercase tracking-[0.1em] text-slate-500"
                  >
                    {feature}
                  </span>
                ))}

              </div>


              <Link
                to={`/products/${product.id}`}
                className="mt-8 inline-flex items-center gap-3 font-body text-xs font-semibold text-brand-primary"
              >
                Explore Product

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Products