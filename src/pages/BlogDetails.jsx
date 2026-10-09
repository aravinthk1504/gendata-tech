import { Link, useParams } from "react-router-dom"

import Navbar from "../components/Navbar"
import Footer from "../sections/Footer"
import { blogPosts } from "../data/blogData"

function BlogDetails() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#06152c] px-6 pt-32 text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Article not found
          </p>
          <h1 className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl">
            This article may have moved.
          </h1>
          <Link
            to="/blog"
            className="mt-8 rounded-full bg-brand-accent px-6 py-3 font-body text-sm font-semibold text-white transition hover:bg-brand-primary"
          >
            Back to insights
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="bg-[#06152c] px-6 pb-24 pt-40 sm:pt-48 lg:px-10">
        <article className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="font-body text-sm font-medium text-blue-200 transition hover:text-white"
          >
            &larr; Back to insights
          </Link>

          <header className="mt-12 border-b border-white/10 pb-10">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              {post.category}
            </p>
            <h1 className="mt-5 font-heading text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 font-body text-sm text-slate-400">
              {post.readTime}
            </p>
          </header>

          <div className="py-10">
            <p className="font-body text-lg leading-8 text-slate-300">
              {post.excerpt}
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default BlogDetails