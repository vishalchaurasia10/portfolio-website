import About from '@/components/Content/About'
import Education from '@/components/Content/Education'
import Skills from '@/components/Content/Skills'
import Transition from '@/components/Layout/Transition'
import Head from 'next/head'
import React from 'react'

const aboutme = () => {
  return (
    <>
      <Head>
        <title>About Me - Vishal Chaurasia</title>
        <meta name="description" content="Learn more about Vishal Chaurasia, his background, skills, and education." />
        <meta property="og:title" content="About Me - Vishal Chaurasia" />
        <meta property="og:description" content="Learn more about Vishal Chaurasia, his background, skills, and education." />
        <meta property="og:image" content="/about-me-og-image.png" /> {/* Replace with actual image */}
        <meta property="og:url" content="https://vishalchaurasia.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Me - Vishal Chaurasia" />
        <meta name="twitter:description" content="Learn more about Vishal Chaurasia, his background, skills, and education." />
        <meta name="twitter:image" content="/about-me-twitter-card-image.png" /> {/* Replace with actual image */}
      </Head>
      <Transition />
      <About />
      <Skills />
      <Education />
    </>
  )
}

export default aboutme
