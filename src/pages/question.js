import React from "react";
import { Link } from "gatsby";
import Layout from "@rocketseat/gatsby-theme-docs/src/components/Layout";
import SEO from "@rocketseat/gatsby-theme-docs/src/components/SEO";
import TriviaQuestion from "../components/TriviaQuestion";

export default function Question() {
  return (
    <Layout title="Question">
      <SEO title="Question"/>
      <TriviaQuestion/>
    </Layout>
  );
}
