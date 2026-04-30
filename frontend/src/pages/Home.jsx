import React from 'react'
import Navbar from '../components/Navbar'
import { ArrowRight, Download, LayoutTemplate, Sparkles, Zap } from 'lucide-react'
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
            <span className='bg-linear-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent'>AI in Seconds</span> 
            </motion.h1>

            {/* description */}
            <motion.p
             initial={{opacity:0, y:20}}
             animate={{opacity:1, y:0}}
            transition={{duration:0.2}}
            className='max-w-2xl mx-auto mt-6 text-lg text-gray-400'
            >Create beautiful, fully responsive websites in seconds with AI. No coding skills needed ideal for startups, creators, and modern businesses.
            </motion.p>
            
            {/* buttons */}
            <motion.div
             initial={{opacity:0, y:20}}
             animate={{opacity:1, y:0}}
            transition={{duration:0.3}}
            className='flex flex-col sm:flex-row justify-center gap-4 mt-10 '
            >
              <button className='flex items-center justify-center gap-2 px-6 py-3 bg-green-500
              hover:bg-green-600 rounded-xl font-semibold transition'>
                Start Building <ArrowRight size={18} />
                </button>
                <button className='px-6 py-3 border border-white/20 hover:bg-white/10 rounded-xl
                transition'>Live Preview</button>
            </motion.div>

            {/* feature card */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-20'>
              <div className='p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur
              hover:border-green-400 transition'>
                <Zap className='text-yellow-400 mb-4'/>
                <h3 className='font-semibold text-lg mb-2 '>Instant Generation</h3>
                <p className='text-sm text-gray-400'>Describe your website and AI generate it instantly</p>
              </div>

              <div className='p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur
              hover:border-green-400 transition'>
                <LayoutTemplate className='text-red-400 mb-4'/>
                <h3 className='font-semibold text-lg mb-2 '>Responsive Layout</h3>
                <p className='text-sm text-gray-400'>Website look perfect on mobile, tablet and dekstop instantly</p>
              </div>

              <div className='p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur
              hover:border-green-400 transition'>
                <Download className='text-blue-400 mb-4'/>
                <h3 className='font-semibold text-lg mb-2 '>Export Code</h3>
                <p className='text-sm text-gray-400'>Download clean HTML, CSS and JS instantly</p>
              </div>
              </div>
        </div>
      </section>
    </>
  )
}

export default Home
