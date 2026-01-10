import { useState } from 'react'
import './App.css'
import Background from './Elements/GradientBackground'
import { FloatingButton } from './Elements/MenuButton'
import BlobImage from './Elements/BlobImage'
import OceanBottom from './Elements/OceanElement'

function App() {

  return (
    <>
      <div className='w-screen h-screen'>
        <Background></Background>
        <FloatingButton></FloatingButton>

        <header>
          <h1 className="text-5xl w-full mb-10 fixed p-8">
            Name (need to change this)
          </h1>

        </header>

        <section id="home" className="w-full overflow-x-hidden">
          <div className="flex flex-col md:flex-row gap-8 w-full pt-40">
            <div className="w-full md:w-1/2 min-w-0 flex justify-center">
              <BlobImage />
            </div>

            <div className="w-full md:w-1/2 min-w-0 flex flex-col justify-center">
              <h1 className='text-7xl'>Hi, I'm Name</h1>
              <p className='text-2xl pl-5 pt-5'>Insert something here as a one sentence summary</p>
            </div>
          </div>

          <OceanBottom></OceanBottom>
        </section>


        
        <section id='work' className='text-3xl mt-96 mb-96 break-all overflow-x-hidden max-w-full'>work: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</section>
        <section id='contact' className='text-3xl mt-96 mb-96 break-all overflow-x-hidden max-w-full'>contact: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</section>
        <footer style={{ padding: '50px' }}>
          <p>nice</p>
        </footer>
      </div>
    </>
  )
}

export default App
