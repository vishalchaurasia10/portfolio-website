import Gallery from '@/components/Content/Gallery'
import Transition from '@/components/Layout/Transition'
import Head from 'next/head'
import React from 'react'

const gallery = () => {
  return (
    <>
      <Head>
        <title>Gallery - Vishal Chaurasia</title>
        <meta name="description" content="Explore the gallery of Vishal Chaurasia's projects, events, and moments captured in images." />
        <meta property="og:title" content="Gallery - Vishal Chaurasia" />
        <meta property="og:description" content="Explore the gallery of Vishal Chaurasia's projects, events, and moments captured in images." />
        <meta property="og:image" content="/gallery-og-image.png" /> {/* Replace with actual image */}
        <meta property="og:url" content="https://vishalchaurasia.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery - Vishal Chaurasia" />
        <meta name="twitter:description" content="Explore the gallery of Vishal Chaurasia's projects, events, and moments captured in images." />
        <meta name="twitter:image" content="/gallery-twitter-card-image.png" /> {/* Replace with actual image */}
      </Head>
      <Transition />
      <Gallery />
    </>
  )
}

export default gallery
