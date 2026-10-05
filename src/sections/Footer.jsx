import { Link } from "react-router-dom"
import { motion } from "motion/react"

import {
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa"


const footerLinks = {
  Services: [
    {
      label: "AI Development",
      path: "/services/ai-development",
    },
    {
      label: "Agentic AI",
      path: "/services/agentic-ai",
    },
    {
      label: "AI Automation",
      path: "/services/ai-automation",
    },
    {
      label: "Full Stack Development",
      path: "/services/full-stack-development",
    },
    {
      label: "Software Development",
      path: "/services/software-development",
    },
    {
      label: "App Development",
      path: "/services/app-development",
    },
    {
      label: "IoT Solutions",
      path: "/services/iot-solutions",
    },
  ],

  Products: [
    {
      label: "GenData LMS",
      path: "/products/lms",
    },
    {
      label: "GenData CRM",
      path: "/products/crm",
    },
    {
      label: "GenData ERP",
      path: "/products/erp",
    },
    {
      label: "GenData Billing",
      path: "/products/billing",
    },
  ],

  Explore: [
    {
      label: "Training",
      path: "/training",
    },
    {
      label: "Insights & Ideas",
      path: "/blog",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ],
}


const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "#",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "#",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "#",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "#",
  },
]


function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030b18] px-6 pb-7 pt-20 lg:px-10 lg:pt-24">

      {/* =====================================
          BACKGROUND
      ====================================== */}

      <div className="pointer-events-none absolute -bottom-70 left-1/2 h-120 w-180 -translate-x-1/2 rounded-full bg-brand-primary/10 blur-[150px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,.15) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.15) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
        }}
      />


      <div className="relative mx-auto max-w-350">

        {/* =====================================
            MAIN FOOTER
        ====================================== */}

        <div className="grid gap-14 border-b border-white/[0.08] pb-16 lg:grid-cols-[1.2fr_1.8fr] lg:gap-20">

          {/* BRAND */}

          <div>

            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              {/* Temporary logo mark */}

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-primary to-brand-accent">

                <span className="font-heading text-xs font-bold text-white">
                  GD
                </span>

              </div>


              <div>

                <p className="font-heading text-lg font-semibold tracking-[-0.02em] text-white">
                  GenData Tech
                </p>

                <p className="mt-0.5 font-body text-[7px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Intelligence. Engineered.
                </p>

              </div>

            </Link>


            <p className="mt-7 max-w-md font-body text-sm leading-7 text-slate-500">
              Building intelligent AI systems, digital products and
              connected technology designed for real-world applications.
            </p>


            {/* Social */}

            <div className="mt-8">

              <p className="font-body text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                Connect
              </p>


              <div className="mt-4 flex gap-2">

                {socialLinks.map((social) => {

                  const Icon = social.icon

                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      whileHover={{
                        y: -3,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-500 transition duration-300 hover:border-brand-accent/40 hover:bg-brand-accent/10 hover:text-white"
                    >
                      <Icon size={15} />

                    </motion.a>
                  )
                })}

              </div>

            </div>

          </div>



          {/* LINKS */}

          <div className="grid gap-10 sm:grid-cols-3">

            {Object.entries(footerLinks).map(
              ([section, links]) => (

                <div key={section}>

                  <p className="font-body text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    {section}
                  </p>


                  <div className="mt-5 flex flex-col gap-3.5">

                    {links.map((link) => (

                      <Link
                        key={link.label}
                        to={link.path}
                        className="group flex w-fit items-center gap-2 font-body text-xs text-slate-400 transition-colors duration-300 hover:text-white"
                      >

                        <span>
                          {link.label}
                        </span>

                        <span className="translate-x-[-4px] text-brand-accent opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                          →
                        </span>

                      </Link>

                    ))}

                  </div>

                </div>

              )
            )}

          </div>

        </div>





        {/* =====================================
            BOTTOM
        ====================================== */}

        <div className="flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-body text-[12px] text-slate-600">
            © {new Date().getFullYear()} GenData Tech. All rights reserved.
          </p>


          <div className="flex gap-5">

            <Link
              to="/privacy"
              className="font-body text-[12px] text-slate-600 transition hover:text-slate-300"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="font-body text-[12px] text-slate-600 transition hover:text-slate-300"
            >
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer