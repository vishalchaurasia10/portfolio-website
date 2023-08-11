import React, { useContext, useState } from 'react'
import { SiGooglemessages } from 'react-icons/si'
import { AiFillCloseCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext'

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { buttonEnter, importantEnter, textLeave } = useContext(mouseVariantsContext)
  const [message, setMessage] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setMessage({
      ...message,
      [name]: value
    })
  }

  return (
    <>
      {isOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='wrapper fixed inset-0 backdrop-blur-md bottom-0 z-30 h-screen flex items-center justify-center w-full pt-28 pb-20 md:pt-40 lg:pt-32 px-3'>
          <div className="messageWrapper font-firaCode text-white border border-white bg-black lg:w-1/2 rounded-2xl p-6 md:p-8">
            <div
              className="sendMessage flex flex-col items-center justify-center space-y-4 mt-4">
              <input onChange={handleChange} value={message.name} className='w-full rounded-lg px-4 py-2 bg-[rgba(255,255,255,0.2)] outline-none' type="text" name='name' placeholder='Enter your name' />
              <input onChange={handleChange} value={message.email} className='w-full rounded-lg px-4 py-2 bg-[rgba(255,255,255,0.2)] outline-none' type="email" name='email' placeholder='Enter your email' />
              <textarea onChange={handleChange} value={message.message} className='w-full rounded-lg px-4 py-2 bg-[rgba(255,255,255,0.2)] outline-none' name="message" id="message" cols="30" rows="4" />
              <div className="upload w-full">
                <button onMouseEnter={buttonEnter} onMouseLeave={textLeave} className='bg-white text-black my-2 px-4 py-2 rounded-md'>Send</button>
              </div>
            </div>
          </div>
        </motion.div>}
      {isOpen ?
        <div
          onClick={handleClick} onMouseEnter={importantEnter} onMouseLeave={textLeave} className='fixed bottom-8 right-6 md:right-8 z-40 rounded-full flex justify-center items-center font-firaCode text-xl bg-black'>
          <AiFillCloseCircle className='text-[#57E6D9] text-5xl' />
        </div>
        :
        <div onClick={handleClick} onMouseEnter={importantEnter} className='fixed bottom-8 right-6 md:right-8 z-40 rounded-full flex justify-center items-center font-firaCode text-xl bg-black'>
          <SiGooglemessages className='text-[#57E6D9] text-5xl' />
        </div>}
    </>
  )
}

export default Contact
