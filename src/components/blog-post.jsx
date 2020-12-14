import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Styled from 'styled-components'

//Fetch all post informaiton from the slug
export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      description
      body {
        raw
        references {
          file {
            url
            fileName
          }
        }
      }
    }
  }
`

const BlogPost = props => {
  const post = props.data.contentfulBlogPost
  const json = JSON.parse(post.body.raw)
  //options to configure the nodes on the Document parser
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        // console.log(node)

        const refToNodeImg = props.data.contentfulBlogPost.body.references.filter(
          ref => {
            return ref.file.url.includes(node.data.target.sys.id)
          }
        )[0]

        const alt = refToNodeImg.file.fileName
        const url = refToNodeImg.file.url

        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <PostContainer>
      <Title>{post.title}</Title>
      <Date>Published on {post.publishedDate}</Date>
      <RichText>{documentToReactComponents(json, options)}</RichText>
    </PostContainer>
  )
}

export default BlogPost

const PostContainer = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 35px;

a{
    color:White;
}

`

const Title = Styled.h1`
text-align: Center;
`
const Date = Styled.h2`
display: flex;
  flex-direction: column;
  padding: 0;
  /* padding-bottom: 35px; */
text-align: Center;
color: ${p => p.theme.colors.grey};
font-size: 18px;
`

const RichText = Styled.div`
margin: 8em;
margin-top: 0;
padding:5em;
padding-top:0;
`
