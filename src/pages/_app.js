import Contact from '@/components/Layout/Contact'
import Cursor from '@/components/Layout/Cursor'
import Navbar from '@/components/Layout/Navbar'
import GalleryState from '@/context/gallery/GalleryState'
import MouseVariantsState from '@/context/mouseVariants/MouseVariantsState'
import ProjectState from '@/context/projects/ProjectState'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <MouseVariantsState>
        <Navbar />
        <Cursor />
        <GalleryState >
          <ProjectState>
            <Component {...pageProps} />
            <Contact />
          </ProjectState>
        </GalleryState>
      </MouseVariantsState>
    </>
  )
}
