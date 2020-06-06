import React from 'react'


export class Option extends React.Component {
  handleclick(e) {
    e.preventDefault()
    if (this.props.playing) {
      console.log('estas jugando...')
    } else {
      this.props.handle_option(e)
    }
  }
  render() {
    let shadow = ''
    if (this.props.win) {
      shadow = 'wrapper_button_option_shadow'
    }
    console.log(this.props)
    return (
      <div className={this.props.name + " " + this.props.position + " " + shadow} id="wrapper_button_option">
        <button onClick={this.handleclick.bind(this)} className="button_option" name={this.props.name}>
          <img src={"./asset/icon-" + this.props.name + ".svg"} alt={this.props.name} />
        </button>
      </div>
    )
  }
}
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="" id="main">
        <div className="left"><Option name="paper" handle_option={this.props.handle_option} playing={this.props.playing} /></div>
        <div className="right"><Option name="scissors" handle_option={this.props.handle_option} playing={this.props.playing} /></div>
        <div className="down"><Option name="rock" handle_option={this.props.handle_option} playing={this.props.playing} /></div>
      </div>
    )
  }
}