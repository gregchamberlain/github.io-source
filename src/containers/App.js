import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {

  render() {
    const { children } = this.props
    return (
      <div>
        <h1>This is my app</h1>
        {children}
      </div>
    )
  }
}

export default connect()(App)
