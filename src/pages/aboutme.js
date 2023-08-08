import About from '@/components/Content/About'
import Education from '@/components/Content/Education'
import Skills from '@/components/Content/Skills'
import Transition from '@/components/Layout/Transition'
import React from 'react'

const aboutme = () => {
  return (
    <>
      <Transition />
      <About />
      <Skills />
      <Education />
    </>
  )
}

export default aboutme
