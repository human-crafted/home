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
            console.log('Ref file URL', ref.file.url)
            console.log('node data target', node.data.target.sys.id)
            return ref.file.url.includes(node.data.target.sys.id)
          }
        )[0]

        // console.log("@@@@@@@",refToNodeImg)
        const alt = refToNodeImg.file.fileName //node.data.targ//node.data.target.fields.title["en-US"]
        const url = refToNodeImg.file.url //props.data.contentfulBlogPost.body.references[0].file.url

        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <PostContainer>
      <Title>{post.title}</Title>
      <Date>{post.date}</Date>
      {documentToReactComponents(json, options)}
    </PostContainer>
  )
}

export default BlogPost

const PostContainer = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 35px;
`

const Title = Styled.h1`
text-align: Center
`
const Date = Styled.h1`
display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 35px;
text-align: Center
`
