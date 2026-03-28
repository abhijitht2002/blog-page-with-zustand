import { ChevronDown, Globe, Menu, Moon, Sun, X } from 'lucide-react'
import React, { useState } from 'react'
import { useThemeStore } from '../store/useThemeStore'
import { useLangStore } from '../store/useLangStore';

function Navbar() {
  const { dark, toggleTheme } = useThemeStore()
  const { lang, setLang } = useLangStore();
  const [openLang, setOpenLang] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिन्दी" },
    { code: "ml", label: "മലയാളം" }
  ]

  return (
    <div className='sticky top-0 z-50 bg-white dark:bg-gray-900 shadow'>
      <div className='flex justify-between items-center px-6 py-5 text-black dark:text-white'>
        <h1 className='text-xl font-bold'>DevBlogs</h1>

        <button
          className='md:hidden'
          onClick={() => { setMobileMenu(!mobileMenu) }}>
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className='hidden md:flex items-center gap-4'>
          <div className='relative'>
            <button
              onClick={() => { setOpenLang(!openLang) }}
              className='flex items-center gap-1'>
              <Globe size={18} />
              <span className='text-sm font-medium'>{lang}</span>
              <ChevronDown size={16} />
            </button>

            {openLang && (
              <div className='absolute right-0 mt-2 w-28 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden'>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code)
                      setOpenLang(false)
                    }}
                    className='w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className=''>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      {mobileMenu && (
        <div className='md:hidden px-6 py-4 space-y-4 bg-white dark:bg-gray-900 shadow'>
          <div>
            <p className='text-sm font-semibold mb-2 text-black dark:text-white'>Language</p>
            <div className='flex gap-3'>
              {languages.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-sm border border-gray-400 ${lang === l
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-black dark:text-white border-gray-400 dark:border-gray-600"
                    }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <span className='text-sm font-medium text-black dark:text-white'>Theme</span>
            <button
              onClick={toggleTheme}
              className='p-2 rounded-full bg-gray-100 dark:bg-gray-700'
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar