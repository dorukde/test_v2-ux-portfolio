import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../components/scroll.css'

class ScrollBar extends Component {
  render() {
    const { width, height } = this.props
    return (
      <div
        className="scrollbar"
        style={{
          border: 'solid 1px lightgray',
          height,
          backgroundColor: '#f4f6f9',
        }}
      >
        <div
          className="scrollbar"
          id="hoge"
          style={{
            width: `${width}%`,
            height,
            backgroundColor: '#40aa94',
          }}
        />
      </div>
    )
  }
}
ScrollBar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.numberisRequired,
}

ScrollBar.defaultProps = {
  height: 10,
  width: 0,
}

class ManageScrollBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0,
      scrollBarRate: 0,
    }
    this.ScrollRateCalculation = this.ScrollRateCalculation.bind(this)
  }

  ScrollRateCalculation() {
    const innerHeight = window.innerHeight //A
    const scrollMax = Math.ceil(window.outerHeight - innerHeight)
    const scrollY =
      document.documentElement.scrollTop || document.body.scrollTop
    const scrollRate = parseInt((scrollY / scrollMax) * 100, 10)
    this.setState({
      scrollY: scrollY,
      scrollBarRate: scrollRate,
    })
  }

  componentDidMount() {
    // sanity check to see if the window object is accessible
    // as you don't have access to it in ssr(server side rendering)
    if (typeof window !== 'undefined') {
      this.ScrollRateCalculation()
      document.addEventListener('scroll', this.ScrollRateCalculation)
      window.addEventListener('hashchange', this.ScrollRateCalculation)
      document.addEventListener('click', this.ScrollRateCalculation)
    }
  }
  // remove the listener
  // when the component is not mounted anymore
  // you don't need it, no need for lingering stuff
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.ScrollRateCalculation)
    }
  }

  render() {
    const { scrollBarRate } = this.state // destructuring is your new best friend, learn it, love it, breath it xD.
    return (
      <div>
        <ScrollBar className="scrollbar" width={scrollBarRate} />
      </div>
    )
  }
}

class Scroller extends Component {
  render() {
    return (
      <div>
        <ManageScrollBar />
      </div>
    )
  }
}

export default Scroller
