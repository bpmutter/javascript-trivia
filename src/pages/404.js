import React from 'react';
import { Link } from 'gatsby';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO';

export default function NotFound() {
  return (
    <Layout title="Page not found!">
      <SEO title="404: Not found" />
      <p>You just hit a route that doesn&#39;t exist...that's a bummer</p>
      <div style={{display: "flex", alignItems: "center"}}>
        <img
          src="/feeling-blue.svg"
          alt="feeling blue"
          style={{maxWidth: 400, margin: "0 auto"}}
        />
      </div>
      <p style={{textAlign: 'center', marginTop: '2em'}}>
        If you&#39;d like to go back to homepage, <Link to="/">click here</Link>
        .
      </p>
    </Layout>
  );
}
