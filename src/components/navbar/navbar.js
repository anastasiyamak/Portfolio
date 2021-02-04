import React from "react"
import { Link } from "gatsby"
import { Container, Logo, Menu, MenuIcon, ContactLinksTitle, ContactLink, LinkIcon, Copy } from './styles'
import Flex from 'styled-flex-component'
import HomeIcon from '../../images/home.svg'
import AboutIcon from '../../images/user.svg'
import ExpirienceIcon from '../../images/briefcase.svg'
import ProjectsIcon from '../../images/projects.svg'
import LinkedIn from '../../images/linkedin.svg'
import Github from '../../images/github.svg'
import Gmail from '../../images/gmail.svg'


const Navbar = ({isOpen}) => {
  return (
    <Container isOpen={isOpen}>
      <Logo>
        <Link to='/'>AM</Link>
      </Logo>
      <Menu>
        <Link to="/" activeClassName="active"><MenuIcon icon={HomeIcon}/> Home</Link>
        <Link to="/about" activeClassName="active"><MenuIcon icon={AboutIcon}/> About me</Link>
        <Link to="/expirience" activeClassName="active"><MenuIcon icon={ExpirienceIcon}/> Expirience</Link>
        <Link to="/projects" activeClassName="active"><MenuIcon icon={ProjectsIcon}/> Projects</Link>
      </Menu>
      <div>
        <ContactLinksTitle>
          Contact Links
        </ContactLinksTitle>
        <Flex justifyCenter>
          <ContactLink href="https://www.linkedin.com/in/anastasiya-makarevich-84481311b/" className='link' target='_blank'>
            <LinkIcon icon={LinkedIn} />
          </ContactLink>
          <ContactLink href="https://github.com/anastasiyamak" className='link' target='_blank'>
            <LinkIcon icon={Github} />
          </ContactLink>
          <ContactLink href="mailto:n.makar.work@gmail.com" className='link'>
            <LinkIcon icon={Gmail} />
          </ContactLink>
        </Flex>
      </div>
      <Copy>&copy; {new Date().getFullYear()} A. Makarevich</Copy>
    </Container>
  )
}

export default Navbar