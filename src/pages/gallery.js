import Gallery from '@/components/Content/Gallery'
import CustomHead from '@/components/Layout/CustomHead'
import Transition from '@/components/Layout/Transition'
import React from 'react'

const gallery = () => {
  return (
    <>
      <CustomHead title='Gallery - Vishal Chaurasia' description='Explore the gallery of Vishal Chaurasia&apos;s projects, events, and moments captured in images.' />
      <Transition />
      <Gallery />
    </>
  )
}

export default gallery
