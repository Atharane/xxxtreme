import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'
import CardsGrid from './components/CardsGrid'
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';

function App() {
  const theme = useMantineTheme()
   const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const hero_image = mobile ? "/hero-mobile.jpg" : "/hero-desktop.jpg"

  return (
    <>
      <section
        style={{
          backgroundSize: "cover",
          backgroundPosition: "start",
          backgroundImage:
            `linear-gradient(229deg, rgba(254,249,246,0) 15%, rgba(255,255,255,1) 100%), url(${hero_image})`,
            height: "100vh",
        }}
      >
        <NavigationBar />
        <HeroSection />
      </section>

      {/* <CardsCarousel /> */}
      <CardsGrid />
    </>
  )
}

export default App
