import React from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";

import { Button, Container } from "reactstrap";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  </Layout>
);

export default IndexPage;
