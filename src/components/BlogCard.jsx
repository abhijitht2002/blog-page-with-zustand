import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function BlogCard({ blog }) {
  const { t } = useTranslation()

  return (
    <div className='bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200'>
      {/* cover image */}
      <img src={blog.cover_image || "/placeholder.png"} alt={blog.title} className='w-full h-48 object-cover' />

      {/* content */}
      <div className='p-4'>
        <h1 className='text-black dark:text-white text-lg font-semibold mb-2'>{blog.title}</h1>
        <p className='text-sm mb-2'>
          <span className='text-gray-600 dark:text-gray-300 line-clamp-2'>{blog.description}{" "}</span>
          <Link to={`/${blog.id}`} className='text-blue-500 hover:underline hover:cursor-pointer transition'>{t("readMore")}</Link >
        </p>

        <div className='flex items-center justify-between text-xs text-gray-500 dark:text-gray-400'>
          <span>By {blog.user.name}</span>
          <span>{blog.reading_time_minutes} min read • {blog.readable_publish_date}</span>
        </div>

        <div className='mt-2 flex flex-wrap gap-1'>
          {blog.tag_list.map((tag) => (
            <span key={tag} className='bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded'>
              #{tag}
            </span>
          ))}


        </div>

        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          ❤️ {blog.positive_reactions_count} reactions
        </div>
      </div>
    </div>
  )
}

export default BlogCard