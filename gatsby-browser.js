/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
import 'aframe'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Scene } from 'aframe-react'
import 'aframe-environment-component'

const wrapRootElement = ({ element }) => (
  <>
    <Helmet>
      <script src="https://aframe.io/releases/1.4.1/aframe.min.js"></script>
    </Helmet>
    <Scene>{element}</Scene>
  </>
)

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}
