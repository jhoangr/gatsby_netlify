import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { Link } from "gatsby"
// import { MDXRenderer } from 'gatsby-plugin-mdx'
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <h1>My Blog Posts</h1>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <Link to={`/blog/${node.slug}`}>
            {node.frontmatter.title}</Link>
            <p>Posted: {node.frontmatter.date}</p>
            {/* {node.body} */}
          </article>
        ))
      }
    
    </Layout>
  )
}


export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage