import React, {Component, PropTypes} from 'react';
import {connect} from './react-redux';

class Header extends React.Component {

  static propTypes = {
    themeColor: PropTypes.string
  }

  render() {
    return (
      <div >
        <h1 style={{
          color: this.props.themeColor
        }}>i am Header</h1>
      </div>
    )

  }

}

const mapStateToProps = (state) => {
  return{
    themeColor : state.themeColor
  }
}
Header = connect(mapStateToProps)(Header)

export default Header
