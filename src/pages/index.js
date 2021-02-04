import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { HomePageTitle } from '../components/titles/index'
import { Container, TypingText, Button } from '../components/home/styles'
import Background from '../components/home/backgroundImg'
import Flex from 'styled-flex-component'

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <Background>
      <Container>
        <HomePageTitle>Hello!<br />I'am <span className='name'>Anastasiya Makarevich</span></HomePageTitle>
        <TypingText><span>Front-end developer</span></TypingText>
        <Flex>
          <Button to="/about">About me <span className='arrow' /></Button>
          <Button to="/projects">Projects <span className='arrow' /></Button>
        </Flex>
      </Container>
    </Background>
  </Layout>
)

export default Home