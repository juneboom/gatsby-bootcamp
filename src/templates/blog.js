import React from "react";
import { graphql } from "gatsby";
import {BLOCKS, MARKS} from '@contentful/rich-text-types'
import {renderRichText } from "gatsby-source-contentful/rich-text"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Head from "../components/head";

// export const query = graphql`
//     query (
//         $slug: String
//     ) {
//         markdownRemark (
//             fields: {
//                 slug: {
//                     eq: $slug
//                 }
//             }
//         ) {
//             frontmatter{
//                 title
//                 date
//             }
//             html
//         }
//     }
//  `

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                raw
                references {
                    ... on ContentfulAsset {
                      contentful_id
                      title
                      __typename
                      gatsbyImageData 
                    }
                }
            }
        }
    }
`
// renderMark: {
//     [MARKS.BOLD]: text => <b>{text}</b>
//   },
//   renderNode: {
//     [BLOCKS.HEADING_1]: (node, children) => {
//       return <h1>{children}</h1>
//     },
const Blog = (props) => {
    const options = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: node => {
            const { gatsbyImageData, title} = node.data.target
            return <GatsbyImage image={getImage(gatsbyImageData)} alt={title} />
          }
        }
    }

    return ( 
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}></Head>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {renderRichText(props.data.contentfulBlogPost.body, options)}
        </Layout>
     );
}
 
export default Blog;
// {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw))}