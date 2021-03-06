import React from 'react'


export class Option extends React.Component {
  handleclick(e) {
    e.preventDefault()
    if (this.props.playing) {

    } else {
      this.props.handle_option(e)
    }
  }
  render() {
    let shadow = ''
    if (this.props.win) {
      shadow = 'wrapper_button_option_shadow'
    }
    return (
      <div className={this.props.name + " " + this.props.position + " " + shadow} id={this.props.id}>
        <button onClick={this.handleclick.bind(this)} className="button_option" name={this.props.name}>
          <img src={"./asset/icon-" + this.props.name + ".svg"} alt={this.props.name} />
        </button>
      </div>
    )
  }
}

export class MainBonus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="" id="main_bonus">
        <div className="paper_bonus"><Option name="paper" handle_option={this.props.handle_option} playing={this.props.playing} id={"wrapper_button_option_bonus"} /></div>
        <div className="scissors_bonus"><Option name="scissors" handle_option={this.props.handle_option} playing={this.props.playing} id={"wrapper_button_option_bonus"} /></div>
        <div className="rock_bonus"><Option name="rock" handle_option={this.props.handle_option} playing={this.props.playing} id={"wrapper_button_option_bonus"} /></div>
        <div className="lizard_bonus"><Option name="lizard" handle_option={this.props.handle_option} playing={this.props.playing} id={"wrapper_button_option_bonus"} /></div>
        <div className="spock_bonus"><Option name="spock" handle_option={this.props.handle_option} playing={this.props.playing} id={"wrapper_button_option_bonus"} /></div>
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
        <div className="left"><Option name="paper" handle_option={this.props.handle_option} playing={this.props.playing} id={"wrapper_button_option"} /></div>
        <div className="right"><Option name="scissors" handle_option={this.props.handle_option} playing={this.props.playing} id={"wrapper_button_option"} /></div>
        <div className="down"><Option name="rock" handle_option={this.props.handle_option} playing={this.props.playing} id={"wrapper_button_option"} /></div>
      </div>
    )
  }
}