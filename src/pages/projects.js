import Projects from '@/components/Content/Projects'
import CustomHead from '@/components/Layout/CustomHead'
import Transition from '@/components/Layout/Transition'
import React from 'react'

const projects = () => {
  return (
    <>
      <CustomHead title='Projects - Vishal Chaurasia' description='Explore the projects created by Vishal Chaurasia. Discover his skills and accomplishments.' />
      <Transition />
      <Projects />
    </>
  )
}

export default projects
