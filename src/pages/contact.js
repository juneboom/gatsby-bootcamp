import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"></Head>
            <h1>Contact</h1>
            <p>Have any questions or concerns? You can email me at EMAIL and I will get back to you as soon as possible.</p>
            <p>Feel free to <a href="https://www.google.com" target="_blank">Google me</a>.</p>
        </Layout>
     );
}
 
export default ContactPage;