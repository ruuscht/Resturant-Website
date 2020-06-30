import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      fruit: file(relativePath: { eq: "fruit.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avo: file(relativePath: { eq: "avo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      apricot: file(relativePath: { eq: "apricot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="side-img left">
                        <Img fluid={data.avo.childImageSharp.fluid} />
                    </div>
                    <div className="main-text">Ruuschtuu</div>
                    <div className="main-img">
                        <Img fluid={data.fruit.childImageSharp.fluid} />
                    </div>
                    <div className="side-img right">
                        <Img fluid={data.apricot.childImageSharp.fluid} />
                    </div>
                </div>
                <div className="scroll">
                    <span>Scroll Down</span>
                </div>
            </div>
            <div className="fixed-misc">Worlds best fruit bowl</div>
        </div>
    )
}

export default Banner