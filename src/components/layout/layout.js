import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from '../navbar/navbar'
import "../layout.css"
import {Container} from './styles'
import BurgerButton from '../burgerButton/burgerButton'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar isOpen={isOpen}/>
      <Container>
        <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen}/>
        {children}
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout