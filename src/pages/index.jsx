import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { keyWords } from '../seo/keywords'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={keyWords} />
    <h1>Home</h1>
  </Layout>
)

export default IndexPage
