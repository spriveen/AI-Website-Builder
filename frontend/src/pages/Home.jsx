import React from 'react'
import Navbar from '../components/Navbar'
import { Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

const Home = () => {
  return (
    <>
        <Navbar />
      <section className='relative min-h-screen bg-[#050505] text-white overflow-hidden'>
        {/*glow background  */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute -top-40 -left-40 w-125 h-125 bg-green-600/20 rounded-full blur-[140px]'/>
          <div className='absolute bottom-0 right-0  w-125 h-125 bg-green-600/20 rounded-full blur-[140px]'/>
        </div>

        {/* grid background */}
        <div className='absolute inset-0 opacity-20'
        style={{
          backgroundImage: "linear-gradient(to right, #fffffff15 1px, transparent 1px), linear-gradient(to bottom, #fffffff15 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
        ></div>

        {/* content */}
        <div className='relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center'>
          {/* badge */}
          <motion.div 
          initial={{opacity:0, y:-20}}
          animate={{opacity:1, y:0}}
          className='inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full
          bg-white/5 backdrop-blur'>
            <Sparkles className='w-4 h-4 text-green-400' />
            <span className='text-sm text-gray-300'>AI Website Builder</span>
          </motion.div>

          {/* heading */}
          <motion.h1 
          initial={{opacity:0, y:-40}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.7}}
          className='text-5xl md:text-7xl font-bold leading-tight'>
            Build Website with <br /> 
            <span className='bg-linear-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent'>AI in Seconds</span> </motion.h1>
        </div>
      </section>
    </>
  )
}

export default Home
