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
      <div className="m-5 p-5" id="result">
        <p className="letters_result">{
          this.props.state.youWin ? 'YOU WIN' :
            this.props.state.houseWin ? 'HOUSE WIN' : 'DRAW'
        }</p>
        <button onClick={this.tryAgain} className="btn btn-light pl-5 pr-5 pt-2 pb-2">PLAY AGAIN</button>
      </div>
    )
  }
}