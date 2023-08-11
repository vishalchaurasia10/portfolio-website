import Projects from '@/components/Content/Projects'
import Transition from '@/components/Layout/Transition'
import Head from 'next/head'
import React from 'react'

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects - Vishal Chaurasia</title>
        <meta name="description" content="Explore the projects created by Vishal Chaurasia. Discover his skills and accomplishments." />
        <meta property="og:title" content="Projects - Vishal Chaurasia" />
        <meta property="og:description" content="Explore the projects created by Vishal Chaurasia. Discover his skills and accomplishments." />
        <meta property="og:image" content="/projects-og-image.png" /> {/* Replace with actual image */}
        <meta property="og:url" content="https://vishalchaurasia.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects - Vishal Chaurasia" />
        <meta name="twitter:description" content="Explore the projects created by Vishal Chaurasia. Discover his skills and accomplishments." />
        <meta name="twitter:image" content="/projects-twitter-card-image.png" /> {/* Replace with actual image */}
      </Head>
      <Transition />
      <Projects />
    </>
  )
}

export default projects
