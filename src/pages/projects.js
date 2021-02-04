import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { PageHeading } from '../components/titles/index'
import ProjectsItems from '../components/projects/projectsItems'

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <PageHeading color='white' content='projects'>Projects</PageHeading>
    <ProjectsItems />
  </Layout>
)

export default Projects