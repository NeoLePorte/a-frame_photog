import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import loadable from "@loadable/component";
import { Suspense } from "react";

const Main = loadable(() => import("../components/HomeScene"))





const IndexPage = () => (
  <Layout>
     <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Main userInteractionEnabled={false}/>
      </Suspense>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
