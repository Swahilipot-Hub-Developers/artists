import Portfolio from "@/components/portfolio/Portfolio"
import Events from "@/components/landing/Events"
import Featured from "@/components/landing/Featured"

const { default: Hero } = require("@/components/landing/Hero")


const Landing = () => {
  return (
    <>
    <Hero />
    <Portfolio />
    <Featured />
    <Events />
    </>
  )
}

export default Landing