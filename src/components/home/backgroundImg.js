import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
            query{
                file(relativePath:{
                    regex: "/bg_photo/"
                  }){
                    childImageSharp{
                      fluid(maxWidth: 1920, quality: 90) {
                          ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
        `}

    render={data => {
      const imageData = data.file.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="div"
          className={className}
          fluid={imageData}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection
