import React, { useEffect, useState } from 'react'
import { getBlogs } from '../api/devto'
import BlogCard from '../components/BlogCard'

function Home() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogs()
        setBlogs(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [])

  if (loading) return <p className='p-5'>loading blogs...</p>
  if (!blogs.length) return <p className='p-5'>No blogs found.</p>

  return (
    <div className='px-6 py-7 bg-white dark:bg-black text-black dark:text-white'>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </section>
    </div>
  )
}

export default Home