import React from 'react'

export default class Result extends React.Component {
  constructor(props) {
    super(props)
    this.tryAgain = this.tryAgain.bind(this)
  }
  tryAgain() {
    this.props.tryAgain()
  }
  render() {
    return (
      <div className="" id="result">
        <p className="letters_result">{
          this.props.state.youWin ? 'YOU WIN' :
            this.props.state.houseWin ? 'YOU LOSE' : 'DRAW'
        }</p>
        <button onClick={this.tryAgain} className="btn btn-light">PLAY AGAIN</button>
      </div>
    )
  }
}