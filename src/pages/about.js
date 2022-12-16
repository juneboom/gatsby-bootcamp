import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const AboutPage = () => {
    return ( 
        <Layout>
            <h1>About Me</h1>
            <p>I'm June, a front-end developer looking for work! I love making blogs to document my learning progress and hope to network with others interested in this career path.</p>
            <p><Link to="/contact">Contact</Link></p>
        </Layout>
     );
}
 
export default AboutPage;