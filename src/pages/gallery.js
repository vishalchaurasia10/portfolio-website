import Gallery from '@/components/Content/Gallery'
import CustomHead from '@/components/Layout/CustomHead'
import Transition from '@/components/Layout/Transition'
import React from 'react'

const gallery = () => {
  return (
    <>
      <CustomHead title='Gallery - Vishal Chaurasia' description='Explore the gallery of Vishal Chaurasia&apos;s projects, events, and moments captured in images.' />
      <Transition />
      <div className="galleryWrapper lg:px-5 xl:px-32">
        <Gallery />
      </div>
    </>
  )
}

export default gallery
