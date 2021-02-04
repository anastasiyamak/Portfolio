import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Flex from 'styled-flex-component'
import {ProjectsItems, Project, ProjectInfo} from './styles'

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 449, maxHeight: 256) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "xmart.png" }) {
        ...squareImage
      }
      image2: file(relativePath: { eq: "kalco.png" }) {
        ...squareImage
      }
      image3: file(relativePath: { eq: "kalco1.png" }) {
        ...squareImage
      }
    }
  `)

  return (
    <ProjectsItems>
      <Project href='https://xaccount.app/' target='_blank'>
        <Img fluid={data.image1.childImageSharp.fluid} />
        <ProjectInfo>
          <h5>Xmart</h5>
          <Flex justifyBetween>
            <a href='#'/> 
            <p>Gatsby</p>
          </Flex>
        </ProjectInfo>   
      </Project>
      <Project href='https://kalco.me/' target='_blank'>
        <Img fluid={data.image2.childImageSharp.fluid} />
        <ProjectInfo>
          <h5>Kalco</h5>
          <Flex justifyBetween>
            <a href='#'/> 
            <p>Gatsby</p>
          </Flex>
        </ProjectInfo>
      </Project>  
      <Project href='https://ott.kalco.me/' target='_blank'>
        <Img fluid={data.image3.childImageSharp.fluid} />
        <ProjectInfo>
          <h5>Kalco</h5>
          <Flex justifyBetween>
            <a href='#'/> 
            <p>React-Axios</p>
          </Flex>
        </ProjectInfo>
      </Project>
    </ProjectsItems>
  )
}

export default Projects