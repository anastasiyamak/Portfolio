import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Container, AboutBlock, Img, AboutInfo } from '../components/about/styles'
import { PageHeading } from '../components/titles/index'
import Image from '../components/about/image'
import ContactForm from "../components/about/contactForm"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <PageHeading>About me</PageHeading>
        <AboutBlock>
          <Img>
            <Image />
          </Img>
          <AboutInfo>
            <h5>Hi, I'm Anastasiya Makarevich</h5>
            <h2>I'm in the web development industry <span>with ~1</span> years of experience.</h2>
            <p>
              Hi, I'm <span>Anastasiya Makarevich</span> based in Minsk(Belarus). I can describe myself as a developer with deep interest in modern web development. I specialize in building responsive and usable websites using Html, Css, JavaScript, React and Gatsby.
          </p>
            <p>
              In my free time, I study front-end development with React. My goal is to grow as a developer, write useful apps and contribute to open source projects. I also love traveling and discovering new places.
          </p>
          </AboutInfo>
        </AboutBlock>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default About