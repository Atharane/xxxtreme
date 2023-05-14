import { Routes, Route } from "react-router-dom"
import NavigationBar from "./components/NavigationBar"
import HeroSection from "./components/HeroSection"
import CardsGrid from "./components/CardsGrid"
import { useMediaQuery } from "@mantine/hooks"
import { useMantineTheme } from "@mantine/core"
import VideoPage from "./components/VideoPage"

function App() {
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  const hero_image = mobile ? "/hero-mobile.jpg" : "/hero-desktop.jpg"

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <section
              style={{
                backgroundSize: "cover",
                backgroundPosition: "start",
                backgroundImage: `linear-gradient(229deg, rgba(254,249,246,0) 15%, rgba(255,255,255,1) 100%), url(${hero_image})`,
                height: "100vh",
              }}
            >
              <NavigationBar />
              <HeroSection />
            </section>

            <CardsGrid />
          </>
        }
      />
      <Route path="/videos/:id" element={<VideoPage/>} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}

export default App
