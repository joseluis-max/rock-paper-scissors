import React from 'react'

export default class Circles extends React.Component {
  render() {
    return (
      <div className={this.props.c + "_1"}>
        <div className={this.props.c + "_2"}>
          <div className={this.props.c + "_3"}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}