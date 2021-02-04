import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath:{
        regex: "/about/"
      }){
        childImageSharp{
          fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} alt='img'/>
}

export default Image