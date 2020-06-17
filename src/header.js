import React from 'react'
export default class Header extends React.Component {

  render() {
    return (
      <div className="d-flex justify-content-between align-items-center" id="header">
        <img src='./asset/logo.svg' alt="logo" />
        <div className="text-center" id="wrapper-score">
          <span className="" id="score">SCORE</span>
          <span id="num-score">{this.props.score}</span>
        </div>
      </div>
    )
  }
}