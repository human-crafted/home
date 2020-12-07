import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PageLink from './page-link'

const BlogPostPreview = ({ post }) => (
  <>
    <Container>
      <Link to={'/test'}>
        <PostTitle>
          <h2>{post.title}</h2>
          <date>{post.date}</date>
        </PostTitle>
        <p1>{post.body}</p1>
      </Link>
    </Container>
  </>
)

export default BlogPostPreview

const PostTitle = styled.div`
  date {
    font-size: 15px;
    font-weight: bold;
    color: #c4c2c2;
    padding: 0;
    margin: 0;
    margin-bottom: 1em;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 35px;
  text-decoration: none;
  h2 {
    flex: 1;
    display: flex;
    align-items: center;
    color: white;
    margin-bottom: 10px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  .links {
    font-size: 16px;
    color: white;
  }
  /* min-height: 8vh; */
  p1 {
    color: ${p => p.theme.colors.grey};
  }

  br {
    line-height: 60px;
  }

  :hover {
    border-radius: 20px;
    background-color: #444242;
  }
`

const Bold = styled.span`
  color: white;
`
