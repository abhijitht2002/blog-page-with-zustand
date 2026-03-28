import React from 'react'

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-black dark:text-white border-t border-gray-200 dark:border-gray-700">
      <div className="px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} DevBlogs. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-4 text-sm">
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
          >
            Contact
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer