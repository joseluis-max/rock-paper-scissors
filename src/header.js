import React from 'react'
export default class Header extends React.Component {

  render() {
    return (
      <div className="d-flex justify-content-between align-items-center" id="header">
        <img src='./asset/logo.svg' alt="logo" />
        <button onClick={this.props.original_bonus} className="btn btn-outline-info">{this.props.mode ? "Original" : "Bonus"}</button>
        <div className="text-center" id="wrapper-score">
          <span className="" id="score">SCORE</span>
          <span id="num-score">{this.props.score}</span>
        </div>
      </div>
    )
  }
}