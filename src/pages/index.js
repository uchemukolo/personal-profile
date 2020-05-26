import React from "react";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import "../utils/fontawesome";

import Layout from "../components/layout";
import SEO from "../components/seo";

// library.add(fab, faEnvelope);

// library.add(faCoffee);
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  </Layout>
);

export default IndexPage;
