import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            date
                        }
                    }
                }
            }
        }
    `);
    const blogs = data.allMarkdownRemark.edges;
    return(
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here later on.</p>
            <ol>
                {
                    blogs.map((blog) => {   
                            return (
                                <li>
                                    <h2>
                                        {blog.node.frontmatter.title}
                                    </h2>
                                    <p>{blog.node.frontmatter.date}</p>
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