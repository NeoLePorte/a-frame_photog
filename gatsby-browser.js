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
import 'aframe-environment-component'
import { VideoProvider } from "./src/components/VideoProvider";
import Layout from "./src/components/layout"

export const wrapPageElement = ({ element, props }) => {
  return (
    <VideoProvider><Layout >{element}</Layout></VideoProvider>
      
  )
}

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}
