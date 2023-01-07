import React from "react";
import {Link} from 'gatsby'; //used to preload page content and avoid refresh

import Layout from "../components/layout";
import Head from "../components/head";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"></Head>
      <h1>Hello.</h1>
      <h2>I'm June, a front-end developer, living in the fictional land of New Jersey.</h2>
    </Layout>
  )
}

export default IndexPage;