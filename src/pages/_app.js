import Contact from '@/components/Layout/Contact'
import Cursor from '@/components/Layout/Cursor'
import Navbar from '@/components/Layout/Navbar'
import SignInState from '@/context/SignIn/SignInState'
import GalleryState from '@/context/gallery/GalleryState'
import MouseVariantsState from '@/context/mouseVariants/MouseVariantsState'
import ProjectState from '@/context/projects/ProjectState'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <SignInState>
        <MouseVariantsState>
          <Navbar />
          <Cursor />
          <GalleryState >
            <ProjectState>
              <Component {...pageProps} />
              <Analytics />
              <Contact />
            </ProjectState>
          </GalleryState>
        </MouseVariantsState>
      </SignInState>
    </>
  )
}
