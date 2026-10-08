import { useRef, useState } from "react"
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "motion/react"

import {
  FiArrowRight,
  FiChevronDown,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiShield,
  FiZap,
} from "react-icons/fi"

import { FaWhatsapp } from "react-icons/fa"

import Navbar from "../components/Navbar"
import Footer from "../sections/Footer"


function Contact() {
  const [openFaq, setOpenFaq] = useState(0)

  /* ======================================================
      GOOGLE APPS SCRIPT
  ====================================================== */

  const SCRIPT_URL = 
        "https://script.google.com/macros/s/AKfycbwpxEsIut4yAWV6XLULaXRA8b0S2vE9sY_9etBKzzd4MK8kgGic2XPVk616ugu2KpHhiA/exec"

  /* ======================================================
      HERO ANIMATION
  ====================================================== */

  const heroRef = useRef(null)

  const heroInView = useInView(heroRef, {
    margin: "-10% 0px -10% 0px",
  })

  const reduceMotion = useReducedMotion()

  const heroShouldAnimate = heroInView && !reduceMotion


  /* ======================================================
      FORM STATE
  ====================================================== */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    project: "",
  })

  const [formStatus, setFormStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)


  /* ======================================================
      LOCATIONS
  ====================================================== */

  const locations = [
    {
      type: "Primary Location",
      name: "Coimbatore",
      address: "Add your complete Coimbatore address here",
      timing: "Mon - Sat, 10:00 AM - 6:00 PM",
    },
    {
      type: "Second Location",
      name: "Kovilpatti",
      address:
        "Annai Abirami Nagar, Subha Nagar Area, Kovilpatti - 628502",
      timing: "Mon - Sat, 10:00 AM - 6:00 PM",
    },
  ]


  /* ======================================================
      FAQ
  ====================================================== */

  const faqs = [
    {
      question: "What happens after I submit the enquiry form?",
      answer:
        "We review the information you share and identify the most relevant service or technical direction. We then contact you to understand the requirement in more detail and discuss the next step.",
    },

    {
      question: "How quickly will GenData Tech respond?",
      answer:
        "Our target is to respond within 24 hours during our working days. Complex technical enquiries may require a little additional review before we provide a detailed response.",
    },

    {
      question: "What services can I contact GenData Tech about?",
      answer:
        "You can contact us about AI model development, AI automation, Agentic AI, custom AI solutions, full-stack development, software development, mobile app development, IoT solutions, products and technology training.",
    },

    {
      question:
        "Can I discuss an idea before the project scope is finalized?",
      answer:
        "Yes. You do not need a complete specification before contacting us. Share the problem, idea or outcome you are considering and we can discuss the most suitable direction.",
    },

    {
      question: "Can students contact you about training programs?",
      answer:
        "Yes. Training enquiries are welcome. Select Training in the enquiry form and mention the program or technology you are interested in.",
    },
  ]


  /* ======================================================
      FORM CHANGE
  ====================================================== */

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (formStatus) {
      setFormStatus("")
    }
  }


  /* ======================================================
      FORM SUBMIT
  ====================================================== */

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.service) {
      setFormStatus("service")
      return
    }

    setIsSubmitting(true)
    setFormStatus("")

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",

        /*
          Google Apps Script redirects responses.
          no-cors avoids the browser blocking the request.
        */
        mode: "no-cors",

        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },

        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          service: formData.service,
          project: formData.project.trim(),
        }),
      })

      /*
        Because we use no-cors, the browser receives
        an opaque response and cannot read Google's
        response body.

        Actual saving + email sending is handled
        inside Apps Script.
      */

      setFormStatus("success")

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        project: "",
      })
    } catch (error) {
      console.error("Contact form submission failed:", error)

      setFormStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">

        {/* ======================================================
            HERO
        ====================================================== */}

        <section
          ref={heroRef}
          className="relative overflow-hidden bg-[#030b18] px-6 pb-20 pt-32 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40"
        >
          {/* MAIN GLOW */}

          <motion.div
            className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#002DCC]/15 blur-[170px]"
            animate={
              heroShouldAnimate
                ? {
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.06, 1],
                  }
                : {
                    opacity: 0.7,
                    scale: 1,
                  }
            }
            transition={
              heroShouldAnimate
                ? {
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : {
                    duration: 0.2,
                  }
            }
          />


          {/* SECONDARY GLOW */}

          <motion.div
            className="pointer-events-none absolute -right-40 top-32 h-[350px] w-[350px] rounded-full bg-[#057CFA]/10 blur-[120px]"
            animate={
              heroShouldAnimate
                ? {
                    x: [0, -25, 0],
                    y: [0, 20, 0],
                    opacity: [0.5, 0.9, 0.5],
                  }
                : {
                    x: 0,
                    y: 0,
                    opacity: 0.6,
                  }
            }
            transition={
              heroShouldAnimate
                ? {
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : {
                    duration: 0.2,
                  }
            }
          />


          {/* GRID */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(5,124,250,0.35) 1px, transparent 1px),
                linear-gradient(90deg, rgba(5,124,250,0.35) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
            }}
          />


          <div className="relative mx-auto max-w-[1400px]">

            <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

              {/* ==================================================
                  HERO LEFT
              ================================================== */}

              <div className="max-w-4xl">

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={
                    heroInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {
                          opacity: 0,
                          y: 15,
                        }
                  }
                  transition={{
                    duration: 0.5,
                  }}
                  className="font-body text-[12px] font-semibold uppercase tracking-[0.28em] text-[#057CFA]"
                >
                  Contact GenData Tech
                </motion.p>


                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={
                    heroInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {
                          opacity: 0,
                          y: 25,
                        }
                  }
                  transition={{
                    duration: 0.65,
                    delay: 0.08,
                  }}
                  className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl"
                >
                  Let&apos;s build something

                  <span className="block bg-gradient-to-r from-white via-blue-100 to-[#057CFA] bg-clip-text text-transparent">
                    intelligent together.
                  </span>
                </motion.h1>


                <motion.p
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={
                    heroInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {
                          opacity: 0,
                          y: 18,
                        }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.16,
                  }}
                  className="mt-7 max-w-2xl font-body text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
                >
                  Have an AI idea, digital product requirement or training
                  enquiry? Tell us what you&apos;re looking for and our team
                  will review it and get back to you.
                </motion.p>


                {/* HERO INFO */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={
                    heroInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {
                          opacity: 0,
                          y: 15,
                        }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.25,
                  }}
                  className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3"
                >

                  {/* Availability */}

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#057CFA]/10 text-[#057CFA]">
                      <FiClock />
                    </div>

                    <div>
                      <p className="font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-200">
                        Availability
                      </p>

                      <p className="mt-1 font-body text-xs font-semibold text-white">
                        Mon – Sat
                      </p>
                    </div>

                  </div>


                  {/* Response */}

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#057CFA]/10 text-[#057CFA]">
                      <FiZap />
                    </div>

                    <div>
                      <p className="font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-200">
                        Response
                      </p>

                      <p className="mt-1 font-body text-xs font-semibold text-white">
                        Within 24 hrs
                      </p>
                    </div>

                  </div>


                  {/* Presence */}

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#057CFA]/10 text-[#057CFA]">
                      <FiMapPin />
                    </div>

                    <div>
                      <p className="font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-200">
                        Presence
                      </p>

                      <p className="mt-1 font-body text-xs font-semibold text-white">
                        Coimbatore, India
                      </p>
                    </div>

                  </div>

                </motion.div>

              </div>



              {/* ==================================================
                  HERO RIGHT ANIMATION
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={
                  heroInView
                    ? {
                        opacity: 1,
                        scale: 1,
                      }
                    : {
                        opacity: 0,
                        scale: 0.96,
                      }
                }
                transition={{
                  duration: 0.7,
                  delay: 0.18,
                }}
                className="relative mx-auto hidden h-[360px] w-full max-w-[420px] items-center justify-center lg:flex"
              >

                {/* OUTER ORBIT */}

                <motion.div
                  className="absolute h-[300px] w-[300px] rounded-full border border-white/[0.06]"
                  animate={
                    heroShouldAnimate
                      ? {
                          rotate: 360,
                        }
                      : {
                          rotate: 0,
                        }
                  }
                  transition={
                    heroShouldAnimate
                      ? {
                          duration: 30,
                          repeat: Infinity,
                          ease: "linear",
                        }
                      : {
                          duration: 0.2,
                        }
                  }
                >

                  <div className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#057CFA] shadow-[0_0_18px_rgba(5,124,250,0.9)]" />

                </motion.div>


                {/* INNER ORBIT */}

                <motion.div
                  className="absolute h-[220px] w-[220px] rounded-full border border-[#057CFA]/15"
                  animate={
                    heroShouldAnimate
                      ? {
                          rotate: -360,
                        }
                      : {
                          rotate: 0,
                        }
                  }
                  transition={
                    heroShouldAnimate
                      ? {
                          duration: 22,
                          repeat: Infinity,
                          ease: "linear",
                        }
                      : {
                          duration: 0.2,
                        }
                  }
                >

                  <div className="absolute bottom-[30px] right-[12px] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(147,197,253,0.8)]" />

                </motion.div>


                {/* CONNECTORS */}

                <div className="absolute h-px w-[260px] rotate-[28deg] bg-gradient-to-r from-transparent via-[#057CFA]/20 to-transparent" />

                <div className="absolute h-px w-[250px] -rotate-[35deg] bg-gradient-to-r from-transparent via-[#057CFA]/20 to-transparent" />


                {/* CENTER NODE */}

                <motion.div
                  animate={
                    heroShouldAnimate
                      ? {
                          scale: [1, 1.04, 1],
                        }
                      : {
                          scale: 1,
                        }
                  }
                  transition={
                    heroShouldAnimate
                      ? {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                      : {
                          duration: 0.2,
                        }
                  }
                  className="relative z-10 flex h-[130px] w-[130px] flex-col items-center justify-center rounded-full border border-[#057CFA]/25 bg-[#06152C] shadow-[0_0_70px_rgba(5,124,250,0.12)]"
                >

                  <span className="h-2 w-2 rounded-full bg-[#057CFA] shadow-[0_0_16px_rgba(5,124,250,1)]" />

                  <span className="mt-3 font-heading text-sm font-semibold text-white">
                    GenData Tech
                  </span>

                  <span className="mt-1 font-body text-[8px] uppercase tracking-[0.2em] text-slate-500">
                    Connect
                  </span>

                </motion.div>


                {/* MESSAGE */}

                <motion.div
                  animate={
                    heroShouldAnimate
                      ? {
                          y: [0, -7, 0],
                        }
                      : {
                          y: 0,
                        }
                  }
                  transition={
                    heroShouldAnimate
                      ? {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                      : {
                          duration: 0.2,
                        }
                  }
                  className="absolute right-1 top-10 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur-sm"
                >

                  <p className="font-body text-[9px] font-semibold text-slate-300">
                    Message
                  </p>

                </motion.div>


                {/* AI */}

                <motion.div
                  animate={
                    heroShouldAnimate
                      ? {
                          y: [0, 6, 0],
                        }
                      : {
                          y: 0,
                        }
                  }
                  transition={
                    heroShouldAnimate
                      ? {
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                      : {
                          duration: 0.2,
                        }
                  }
                  className="absolute bottom-12 left-0 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur-sm"
                >

                  <p className="font-body text-[9px] font-semibold text-slate-300">
                    AI Solutions
                  </p>

                </motion.div>


                {/* PRODUCTS */}

                <motion.div
                  animate={
                    heroShouldAnimate
                      ? {
                          x: [0, 6, 0],
                        }
                      : {
                          x: 0,
                        }
                  }
                  transition={
                    heroShouldAnimate
                      ? {
                          duration: 5.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                      : {
                          duration: 0.2,
                        }
                  }
                  className="absolute bottom-2 right-10 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur-sm"
                >

                  <p className="font-body text-[9px] font-semibold text-slate-300">
                    Products
                  </p>

                </motion.div>

              </motion.div>

            </div>

          </div>

        </section>



        {/* ======================================================
            CONTACT WORKSPACE
        ====================================================== */}

        <section className="bg-[#F4F7FB] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

          <div className="mx-auto max-w-[1400px]">

            <div className="grid gap-5 lg:grid-cols-[0.98fr_1.02fr]">


              {/* ==================================================
                  LEFT
              ================================================== */}

              <div className="space-y-5">


                {/* QUICK CONTACT */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >

                  <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-slate-900">
                    Quick Contact
                  </p>


                  <div className="mt-4 grid gap-3 sm:grid-cols-2">


                    {/* WHATSAPP */}

                    <a
                      href="https://wa.me/918428683895"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 transition hover:border-[#057CFA] hover:bg-blue-50/40"
                    >

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">
                          <FaWhatsapp className="text-sm" />
                        </div>

                        <div>
                          <p className="font-heading text-sm font-semibold text-slate-950">
                            WhatsApp
                          </p>

                          <p className="mt-0.5 font-body text-xs text-slate-500">
                            Chat with us now
                          </p>
                        </div>

                      </div>

                      <FiArrowRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#057CFA]" />

                    </a>


                    {/* CALL */}

                    <a
                      href="tel:+918428683895"
                      className="group flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 transition hover:border-[#057CFA] hover:bg-blue-50/40"
                    >

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#002DCC]">
                          <FiPhone className="text-sm" />
                        </div>

                        <div>
                          <p className="font-heading text-sm font-semibold text-slate-950">
                            Call Us
                          </p>

                          <p className="mt-0.5 font-body text-xs text-slate-500">
                            +91 84286 83895
                          </p>
                        </div>

                      </div>

                      <FiArrowRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#057CFA]" />

                    </a>


                    {/* EMAIL */}

                    <a
                      href="mailto:gendatatechies@gmail.com"
                      className="group flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 transition hover:border-[#057CFA] hover:bg-blue-50/40"
                    >

                      <div className="flex min-w-0 items-center gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
                          <FiMail className="text-sm" />
                        </div>

                        <div className="min-w-0">

                          <p className="font-heading text-sm font-semibold text-slate-950">
                            Email
                          </p>

                          <p className="mt-0.5 truncate font-body text-xs text-slate-500">
                            gendatatechies@gmail.com
                          </p>

                        </div>

                      </div>

                      <FiArrowRight className="ml-2 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#057CFA]" />

                    </a>


                    {/* SCHEDULE */}

                    <a
                      href="#"
                      className="group flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 transition hover:border-[#057CFA] hover:bg-blue-50/40"
                    >

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
                          <FiClock className="text-sm" />
                        </div>

                        <div>

                          <p className="font-heading text-sm font-semibold text-slate-950">
                            Schedule a Call
                          </p>

                          <p className="mt-0.5 font-body text-xs text-slate-500">
                            Discuss your requirement
                          </p>

                        </div>

                      </div>

                      <FiArrowRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#057CFA]" />

                    </a>

                  </div>

                </motion.div>



                {/* RESPONSE PROMISE */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05,
                  }}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >

                  <div className="flex items-center gap-2">

                    <FiZap className="text-amber-500" />

                    <p className="font-body text-xs font-bold uppercase tracking-[0.14em] text-slate-900">
                      Our Response Promise
                    </p>

                  </div>


                  <div className="mt-4 space-y-4">

                    {[
                      {
                        number: "1",
                        title: "You send your enquiry",
                        text:
                          "Submit the form, call, email or message us on WhatsApp.",
                      },
                      {
                        number: "2",
                        title: "Our team reviews your requirement",
                        text:
                          "We study the information and identify the right technical direction.",
                      },
                      {
                        number: "3",
                        title: "We respond with the next step",
                        text:
                          "We aim to contact you within 24 hours with questions or the next action.",
                      },
                    ].map((item) => (

                      <div
                        key={item.number}
                        className="grid grid-cols-[28px_1fr] gap-3"
                      >

                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#057CFA] font-body text-xs font-semibold text-white">
                          {item.number}
                        </div>


                        <div>

                          <h3 className="font-heading text-sm font-semibold text-slate-950">
                            {item.title}
                          </h3>

                          <p className="mt-1 font-body text-xs leading-5 text-slate-500">
                            {item.text}
                          </p>

                        </div>

                      </div>

                    ))}

                  </div>

                </motion.div>

              </div>



              {/* ==================================================
                  FORM
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.05,
                }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >

                {/* HEADER */}

                <div className="bg-[#06152C] px-5 py-4 sm:px-6">

                  <h2 className="font-heading text-lg font-semibold text-white sm:text-xl">
                    Start Your Enquiry
                  </h2>

                  <p className="mt-1 font-body text-xs leading-5 text-slate-400 sm:text-sm">
                    Describe your requirement and we&apos;ll respond within 24 hours.
                  </p>


                  <div className="mt-2.5 inline-flex items-center gap-2 rounded-md bg-emerald-500 px-2.5 py-1.5">

                    <span className="h-1.5 w-1.5 rounded-full bg-white" />

                    <span className="font-body text-[11px] font-semibold text-white">
                      Replies within 24h
                    </span>

                  </div>

                </div>



                <form
                  onSubmit={handleSubmit}
                  className="p-4 sm:p-5"
                >

                  {/* SERVICE */}

                  <div>

                    <label className="font-body text-xs font-semibold text-slate-900">
                      Select service
                    </label>


                    <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">

                      {[
                        "AI / ML",
                        "Web Development",
                        "App Development",
                        "Software",
                        "IoT",
                        "Training",
                      ].map((service) => (

                        <label
                          key={service}
                          className="cursor-pointer"
                        >

                          <input
                            type="radio"
                            name="service"
                            value={service}
                            checked={formData.service === service}
                            onChange={handleChange}
                            required
                            className="peer sr-only"
                          />

                          <div className="flex min-h-[58px] items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-center font-body text-xs font-semibold text-slate-600 transition duration-200 hover:border-slate-300 peer-checked:border-[#057CFA] peer-checked:bg-blue-50 peer-checked:text-[#002DCC]">
                            {service}
                          </div>

                        </label>

                      ))}

                    </div>


                    <AnimatePresence>

                      {formStatus === "service" && (

                        <motion.p
                          initial={{
                            opacity: 0,
                            y: -3,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                          }}
                          className="mt-2 font-body text-xs text-red-500"
                        >
                          Please select a service.
                        </motion.p>

                      )}

                    </AnimatePresence>

                  </div>



                  {/* INPUTS */}

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">


                    {/* NAME */}

                    <div>

                      <label
                        htmlFor="contact-name"
                        className="font-body text-xs font-semibold text-slate-700"
                      >
                        Full Name
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 font-body text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#057CFA] focus:ring-2 focus:ring-blue-100"
                      />

                    </div>


                    {/* EMAIL */}

                    <div>

                      <label
                        htmlFor="contact-email"
                        className="font-body text-xs font-semibold text-slate-700"
                      >
                        Email
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 font-body text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#057CFA] focus:ring-2 focus:ring-blue-100"
                      />

                    </div>


                    {/* PHONE */}

                    <div>

                      <label
                        htmlFor="contact-phone"
                        className="font-body text-xs font-semibold text-slate-700"
                      >
                        Phone
                      </label>

                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 font-body text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#057CFA] focus:ring-2 focus:ring-blue-100"
                      />

                    </div>


                    {/* COMPANY */}

                    <div>

                      <label
                        htmlFor="contact-company"
                        className="font-body text-xs font-semibold text-slate-700"
                      >
                        Company
                      </label>

                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Startup / Company"
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 font-body text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#057CFA] focus:ring-2 focus:ring-blue-100"
                      />

                    </div>

                  </div>



                  {/* PROJECT */}

                  <div className="mt-3">

                    <label
                      htmlFor="contact-project"
                      className="font-body text-xs font-semibold text-slate-700"
                    >
                      Project Details
                    </label>

                    <textarea
                      id="contact-project"
                      name="project"
                      rows="4"
                      required
                      value={formData.project}
                      onChange={handleChange}
                      placeholder="Describe your project, goals, timeline or requirement..."
                      className="mt-1.5 w-full resize-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 font-body text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#057CFA] focus:ring-2 focus:ring-blue-100"
                    />

                  </div>



                  {/* PRIVACY */}

                  <div className="mt-3 flex items-center gap-2">

                    <FiShield className="shrink-0 text-sm text-slate-400" />

                    <p className="font-body text-[11px] text-slate-500">
                      Your information is used only to respond to your enquiry.
                    </p>

                  </div>



                  {/* SUBMIT */}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#057CFA] px-5 py-3 font-body text-sm font-semibold text-white transition duration-200 hover:bg-[#002DCC] disabled:cursor-not-allowed disabled:opacity-60"
                  >

                    {isSubmitting
                      ? "Sending..."
                      : "Send My Request"
                    }

                    {!isSubmitting && (
                      <FiArrowRight />
                    )}

                  </button>



                  {/* STATUS */}

                  <AnimatePresence>

                    {formStatus === "success" && (

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 5,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        className="mt-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 font-body text-sm text-green-700"
                      >
                        Thank you. Your enquiry has been submitted. We&apos;ll get back to you soon.
                      </motion.div>

                    )}


                    {formStatus === "error" && (

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 5,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        className="mt-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 font-body text-sm text-red-700"
                      >
                        Something went wrong. Please try again or contact us through WhatsApp.
                      </motion.div>

                    )}

                  </AnimatePresence>



                  {/* WHATSAPP */}

                  <a
                    href="https://wa.me/918428683895"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 font-body text-xs font-semibold text-slate-600 transition hover:border-green-400 hover:text-green-600"
                  >

                    <FaWhatsapp />

                    Or message us on WhatsApp

                  </a>

                </form>

              </motion.div>

            </div>

          </div>

        </section>



        {/* ======================================================
            LOCATIONS
        ====================================================== */}

        <section className="bg-[#F7F9FC] px-6 py-20 sm:py-24 lg:px-10 lg:py-28">

          <div className="mx-auto max-w-[1400px]">

            <div>

              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.25em] text-[#002DCC]">
                Our Locations
              </p>

              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">
                Find GenData Tech.
              </h2>

            </div>


            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {locations.map((location) => (

                <motion.div
                  key={location.name}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="rounded-[26px] border border-slate-200 bg-white p-6 sm:p-8"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#002DCC]">
                    <FiMapPin />
                  </div>


                  <p className="mt-6 font-body text-[9px] font-semibold uppercase tracking-[0.18em] text-[#057CFA]">
                    {location.type}
                  </p>


                  <h3 className="mt-2 font-heading text-2xl font-semibold text-slate-950">
                    {location.name}
                  </h3>


                  <p className="mt-4 max-w-md font-body text-sm leading-7 text-slate-500">
                    {location.address}
                  </p>


                  <div className="mt-4 flex items-center gap-2 text-slate-500">

                    <FiClock className="shrink-0 text-[#057CFA]" />

                    <p className="font-body text-sm">
                      {location.timing}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </section>



        {/* ======================================================
            FAQ
        ====================================================== */}

        <section className="bg-white px-6 py-20 sm:py-24 lg:px-10 lg:py-28">

          <div className="mx-auto max-w-[950px]">


            <div className="text-center">

              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.25em] text-[#002DCC]">
                Frequently Asked Questions
              </p>


              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">
                Before you get in touch.
              </h2>

            </div>



            <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">

              {faqs.map((faq, index) => {

                const isOpen =
                  openFaq === index


                return (

                  <div key={faq.question}>

                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(
                          isOpen
                            ? null
                            : index
                        )
                      }
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >

                      <span className="font-heading text-sm font-semibold text-slate-900 sm:text-base">
                        {faq.question}
                      </span>


                      <FiChevronDown
                        className={`shrink-0 text-slate-500 transition duration-300 ${
                          isOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />

                    </button>



                    <AnimatePresence>

                      {isOpen && (

                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="overflow-hidden"
                        >

                          <p className="max-w-3xl pb-6 font-body text-sm leading-7 text-slate-500">
                            {faq.answer}
                          </p>

                        </motion.div>

                      )}

                    </AnimatePresence>

                  </div>

                )

              })}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  )
}


export default Contact