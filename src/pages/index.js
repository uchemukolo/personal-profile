import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import "../utils/fontawesome";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  </Layout>
);

export default IndexPage;
