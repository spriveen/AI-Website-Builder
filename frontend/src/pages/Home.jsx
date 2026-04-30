import React from 'react'
import Navbar from '../components/Navbar'

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
      </section>
    </>
  )
}

export default Home
