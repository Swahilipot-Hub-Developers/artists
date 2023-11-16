import Portfolio from "@/components/portfolio/Portfolio"

const { default: Hero } = require("@/components/landing/Hero")


const Landing = () => {
  return (
    <>
    <Hero />
    <Portfolio />
    </>
  )
}

export default Landing