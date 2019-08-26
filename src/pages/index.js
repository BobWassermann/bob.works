import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from '../components/heading'
import Paragraph from '../components/paragraph'
import Bubble from '../components/bubble'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ placeSelf: 'end start' }}>
      <Heading>Bob Wassermann</Heading>
      <Paragraph>Front-end developer</Paragraph>
      <Paragraph>Interface designer</Paragraph>
    </div>
    <div style={{ placeSelf: 'end end', textAlign: 'right' }}>
      <Bubble>What keeps you busy?</Bubble>
      <Bubble>Can we get in touch?</Bubble>
    </div>
  </Layout>
)

export default IndexPage
