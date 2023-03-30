import * as React from "react"
import Seo from "../components/seo"
import loadable from "@loadable/component"
import { Suspense } from "react"

const MetatronCube = loadable(() => import("../components/MetatronCube"))

const Main = loadable(() => import("../components/HomeScene"))

const IndexPage = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <Main userInteractionEnabled={false} />
    </Suspense>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
