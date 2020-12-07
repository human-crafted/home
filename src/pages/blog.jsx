import React from 'react'
import styled from 'styled-components'
import PageContainer from '../components/page-container'
import SEO from '../components/seo'
import PostItem from '../components/blogPostPreview'
import { graphql, useStaticQuery } from 'gatsby'

// const posts = [
//   {
//     title: 'Title of post',
//     body: 'Body text goes here',
//     date: '01-01-2020',
//     slug: '/slug',
//   },
//   {
//     title: 'Title of second post',
//     body: 'Body text goes here.......',
//     date: '02-01-2020',
//     slug: '/slug2',
//   },
// ]

const Blog = () => {
  //Contentful plost Posts
  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            description
            body {
              raw
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Blog" description="keep up to date with Human Crafted" />
      <PageContainer>
        <Container>
          <h1>Posts</h1>

          {contentfulData.allContentfulBlogPost.edges.map(postNode => {
            // console.log(post)
            return <PostItem post={postNode.node} />
          })}
        </Container>
      </PageContainer>
    </>
  )
}

export default Blog

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  .heading {
    flex: 1;
    display: flex;
    align-items: center;
  }
  a {
    color: white;
  }
  .links {
    font-size: 16px;
    color: white;
  }
  /* ${media.greaterThan('medium')`
    max-width: 750px;
  `}; */
  min-height: 85vh;
  p {
    color: ${p => p.theme.colors.grey};
  }
  br {
    line-height: 60px;
  }
`

const Bold = styled.span`
  color: white;
`
