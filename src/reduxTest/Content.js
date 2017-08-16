import React, {Component, PropTypes} from 'react';
import ThemeSwitch from './ThemeSwitch'
import {connect} from './react-redux'

class Content extends React.Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render() {
    return (
      <div>
        <p style={{
          color: this.props.themeColor
        }}>hello world</p>
        <ThemeSwitch></ThemeSwitch>
      </div>
    )

  }

}

const mapStateToProps = (state) => {
  return{
    themeColor:state.themeColor

  }
}



Content = connect(mapStateToProps)(Content)

export default Content
