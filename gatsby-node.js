/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { resolve } = require("path")
const path = require("path")

module.exports.createPages = async({graphql,actions})=>{
    const {createPage} = actions

    const blogtemplate = path.resolve("./src/components/blog-post.jsx")

    const res = await graphql(`
    query {
        allContentfulBlogPost {
            edges {
                node {
                    slug
                }
            }
        }
    }
    `)
    res.data.allContentfulBlogPost.edges.forEach((edge)=> {
        createPage({
            component:blogtemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}