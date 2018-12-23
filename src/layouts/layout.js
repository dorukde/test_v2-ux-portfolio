import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'
import Header from '../components/header'
import Header2 from '../components/header2'
import Header3 from '../components/header3'
import Footer from '../components/footer'
import Footer2 from '../components/footer2'
import Transition from '../components/transition'

const Layout = ({ children, data, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            canonicalUrl
            image
            url
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            { name: 'image', content: data.site.siteMetadata.image },
            { name: 'url', content: data.site.siteMetadata.url },
            {
              name: 'canonicalUrl',
              content: data.site.siteMetadata.canonicalUrl,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>{' '}
        <Transition location={location}>
          {location.pathname === '/' && (
            <Header siteTitle={data.site.siteMetadata.title} />
          )}
          {location.pathname !== '/' && (
            <Header3 siteTitle={data.site.siteMetadata.title} />
          )}
          {location.pathname === '/about' && (
            <Header2 siteTitle={data.site.siteMetadata.title} />
          )}

          {children}

          {location.pathname === '/' && <Footer />}

          {location.pathname !== '/' && <Footer2 />}
        </Transition>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
