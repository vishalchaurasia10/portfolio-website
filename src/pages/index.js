import Hero from "@/components/Content/Hero";
import Intro from "@/components/Content/Intro";
import Transition from "@/components/Layout/Transition";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vishal Chaurasia</title>
        <meta name="description" content="Welcome to the portfolio of Vishal Chaurasia. Explore my projects and skills." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Vishal Chaurasia - Portfolio" />
        <meta property="og:description" content="Welcome to the portfolio of Vishal Chaurasia. Explore my projects and skills." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://vishalchaurasia.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vishal Chaurasia" />
        <meta name="twitter:description" content="Welcome to the portfolio of Vishal Chaurasia. Explore my projects and skills." />
        <meta name="twitter:image" content="/twitter-card-image.png" />
      </Head>
      <Transition />
      <Intro />
      <Hero />
    </>
  )
}
