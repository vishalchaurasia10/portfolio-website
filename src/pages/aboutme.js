import About from '@/components/Content/About'
import Education from '@/components/Content/Education'
import Skills from '@/components/Content/Skills'
import CustomHead from '@/components/Layout/CustomHead'
import Transition from '@/components/Layout/Transition'
import React from 'react'

const aboutme = () => {
  return (
    <>
      <CustomHead title='About Me - Vishal Chaurasia' description='Learn more about Vishal Chaurasia, his background, skills, and education.' />
      <Transition />
      <About />
      <Skills />
      <Education />
    </>
  )
}

export default aboutme
