import React, { useContext, useEffect, useState } from 'react'
import { SiGooglemessages } from 'react-icons/si'
import { AiFillCloseCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'
import mouseVariantsContext from '@/context/mouseVariants/mouseVariantsContext'
import { Toaster, toast } from 'react-hot-toast'
import { useRouter } from 'next/router'

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { buttonEnter, importantEnter, textLeave } = useContext(mouseVariantsContext)
  const [message, setMessage] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.keyCode === 27) {
            setIsOpen(false);
        }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
}, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target
    setMessage({
      ...message,
      [name]: value
    })
  }

  const checkValidity = () => {
    if (!message.name || !message.email || !message.message) {
      toast.error('Please fill in all required fields.')
      return false
    }
    else if (message.name.length < 3) {
      toast.error('Name must be at least 3 characters long.')
      return false
    }
    else if (message.message.length < 4) {
      toast.error('Message must be at least 4 characters long.')
      return false
    }
    else if (!message.email.includes('@')) {
      toast.error('Please enter a valid email address.')
      return false
    }
    else {
      return true
    }
  }

  return (
    <>
      <Toaster />
      {isOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='wrapper fixed inset-0 backdrop-blur-md bottom-0 z-30 h-screen flex items-center justify-center w-full pt-28 pb-20 md:pt-40 lg:pt-32 px-3'>
          <div className="messageWrapper font-firaCode text-white border border-white bg-black lg:w-1/2 rounded-2xl p-6 md:p-8">
            <div className="heading py-5 flex items-center space-x-4">
              <h1 className='text-5xl md:text-6xl font-extrabold text-[#57E6D9]'>Message me</h1>
            </div>
            <form
              onSubmit={(e) => {
                if (!checkValidity()) {
                  e.preventDefault(); // Prevent form submission
                }
              }}
              className="sendMessage flex flex-col items-center justify-center space-y-4 mt-4" action="https://formsubmit.co/itsvishal1035@gmail.com" method='post'>
              <input onChange={handleChange} value={message.name} className='w-full rounded-lg px-4 py-2 bg-[rgba(255,255,255,0.2)] outline-none' type="text" name='name' placeholder='Enter your name' />
              <input onChange={handleChange} value={message.email} className='w-full rounded-lg px-4 py-2 bg-[rgba(255,255,255,0.2)] outline-none' type="email" name='email' placeholder='Enter your email' />
              <textarea onChange={handleChange} value={message.message} className='w-full rounded-lg px-4 py-2 bg-[rgba(255,255,255,0.2)] outline-none' name="message" id="message" cols="30" rows="4" />
              <div className="upload w-full">
                <input onMouseEnter={buttonEnter} onMouseLeave={textLeave} type='submit' value='Send' className={`bg-white text-black my-2 px-4 py-2 rounded-md`} />
              </div>
              <input type="hidden" name="_next" value="https://vishalchaurasia.vercel.app/" />
              <input type="hidden" name="_captcha" value="false"></input>
            </form>
          </div>
        </motion.div>}
      {isOpen ?
        <div
          onClick={handleClick} onMouseEnter={importantEnter} onMouseLeave={textLeave} className='fixed bottom-8 right-6 md:right-8 z-40 rounded-full flex justify-center items-center font-firaCode text-xl bg-black'>
          <AiFillCloseCircle className={`${router.pathname==='/' ? 'text-[#58ff13]':'text-[#57E6D9]'} text-5xl`} />
        </div>
        :
        <div onClick={handleClick} onMouseEnter={importantEnter} className='fixed bottom-8 right-6 md:right-8 z-40 rounded-full flex justify-center items-center font-firaCode text-xl bg-black'>
          <SiGooglemessages className={`${router.pathname==='/' ? 'text-[#58ff13]':'text-[#57E6D9]'} text-5xl`} />
        </div>}
    </>
  )
}

export default Contact
