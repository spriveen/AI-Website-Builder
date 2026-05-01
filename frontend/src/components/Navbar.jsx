import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Coins } from "lucide-react"
import LoginModal from './LoginModal'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const navigate = useNavigate()
  const [openLogin, setOpenLogin] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)

  const { userData } = useSelector((state) => state.user || {})

  return (
    <>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10'
      >
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>

          {/* Logo */}
          <div className='flex items-center gap-2 cursor-pointer bg-white/5 p-2 px-4 rounded-2xl border border-zinc-600'>
            <img src='ai2.png' alt='' />
            <span className='font-semibold text-lg bg-linear-to-r from-green-400 to-green-500 bg-clip-text text-transparent'>
              Nexora AI
            </span>
          </div>

          {/* Right side */}
          <div className='flex items-center gap-5'>

            <button
              onClick={() => navigate('/pricing')}
              className='hidden md:block text-sm text-zinc-400 hover:text-white transition'
            >
              Pricing
            </button>

            {/* credits */}
            {userData && (
              <div className='hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm cursor-pointer hover:bg-white/10 transition'>
                <Coins size={14} className='text-yellow-400' />
                <span className='text-white'>{userData?.credits || 0}</span>
                <span className='text-zinc-200'>Credits</span>
                <span className='font-semibold text-zinc-200'>+</span>
              </div>
            )}

            {/* profile / login */}
            {userData ? (
              <div className='relative'>
                <button onClick={() => setOpenProfile(!openProfile)}>
                  <img
                    referrerPolicy='no-referrer'
                    src={userData?.avatar || 'https://ui-avatars.com/api/?name=User'}
                    alt=''
                    className='w-9 h-9 rounded-full border border-white/20 object-cover hover:scale-105 transition'
                  />
                </button>

                <AnimatePresence>
                  {openProfile && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className='absolute right-0 mt-3 w-60 rounded-xl bg-[#0b0b0b] border border-white/10 shadow-2xl overflow-hidden'
                    >
                      <div className='px-4 py-3 border-b border-white/10'>
                        <p className='text-sm font-medium truncate text-white'>
                          {userData?.name}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                onClick={() => setOpenLogin(true)}
                className='px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 font-semibold text-sm transition text-white'
              >
                Login
              </button>
            )}

          </div>
        </div>
      </motion.div>

      {openLogin && (
        <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />
      )}
    </>
  )
}

export default Navbar