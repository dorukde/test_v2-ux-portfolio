import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'
import Header from '../components/header'
import Header2 from '../components/header2'
import Footer from '../components/footer'
import Footer2 from '../components/footer2'
import Transition from "../components/transition"

const Layout = ({ children, data, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet> <Transition location={location}> 
{location.pathname === '/' &&
<Header siteTitle={data.site.siteMetadata.title} />  
}
{location.pathname !== '/' &&
<Header2 siteTitle={data.site.siteMetadata.title} />
}
{children}

{location.pathname === '/' &&
<Footer />
}

{location.pathname !== '/' &&
<Footer2 />
}   
</Transition>      
</>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
