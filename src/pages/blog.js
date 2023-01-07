import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import * as blogStyles from './blog.module.scss';

import Head from "../components/head";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    {
        allContentfulBlogPost(sort: {publishedDate: DESC}) {
          edges {
            node {
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `);
    
    const blogs = data.allContentfulBlogPost.edges;
    return(
        <Layout>
            <Head title="Blog"></Head>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {
                    blogs.map((blog) => {   
                            return (
                                <li className={blogStyles.post}>
                                    <h2>
                                        <Link to={`/blog/${blog.node.slug}`}>
                                            {blog.node.title}
                                        </Link>
                                    </h2>
                                    <p>{blog.node.publishedDate}</p>
                                </li>
                            )  
                        }
                    )
                }
            </ol>
        </Layout>
    )
}

export default BlogPage;