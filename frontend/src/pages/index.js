import Portfolio from "@/components/portfolio/Portfolio"
import Showcase from "./showcase"

const { default: Hero } = require("@/components/landing/Hero")


const Landing = () => {
  return (
    <>
    <Hero />
    <Portfolio />
    <Showcase />
    </>
  )
}

export default Landing