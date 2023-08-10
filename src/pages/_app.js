import Cursor from '@/components/Layout/Cursor'
import Navbar from '@/components/Layout/Navbar'
import MouseVariantsState from '@/context/mouseVariants/MouseVariantsState'
import ProjectState from '@/context/projects/ProjectState'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <MouseVariantsState>
        <Navbar />
        <Cursor />
        <ProjectState>
          <Component {...pageProps} />
        </ProjectState>
      </MouseVariantsState>
    </>
  )
}
