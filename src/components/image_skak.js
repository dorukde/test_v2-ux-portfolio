import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const SkImg = () => (
  <StaticQuery
    query={graphql`
      query {
        sk_1: file(relativePath: { eq: "sk1.png" }) {
          childImageSharp {
            fixed(width: 160) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        sk_2: file(relativePath: { eq: "sk2.png" }) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sk_3: file(relativePath: { eq: "sk3.png" }) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => [
      <Sk_1 fluid={props.data.sk_1.childImageSharp.fluid} />,
      <Sk_2 fluid={props.data.sk_2.childImageSharp.fluid} />,
      <Sk_3 fluid={props.data.sk_3.childImageSharp.fluid} />,
    ]}
  />
)
export default SkImg
