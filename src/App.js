import React from 'react';
import './App.css';


import Header from './header'
import Main, { Option, MainBonus } from './main'
import Rules from './rules'
import Result from './result'
import HousePicked from './housePicked'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bonus: false,
      rules: false,
      rock: false,
      paper: false,
      scissors: false,
      playing: false,
      pick: false,
      housepicked: false,
      house: '',
      score: 0,
      youWin: false,
      houseWin: false,
      draw: false,
      result: false,
      endgame: false
    }
    this.handlerules = this.handlerules.bind(this)
    this.handle_option = this.handle_option.bind(this)
    this.tryAgain = this.tryAgain.bind(this)
    this.housePicked = this.housePicked.bind(this)
    this.original_bonus = this.original_bonus.bind(this)
  }
  componentDidMount() {
    let score = localStorage.getItem('score')
    if (score !== null) {
      this.setState({ score: score })
    }
  }
  housePicked() {
    let num;
    if (this.state.bonus) {
      num = Math.floor(Math.random() * (5 - 1 + 1) + 1)
    } else {
      num = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    }
    if (num === 1) {
      this.setState({ house: 'paper' })
    } else if (num === 2) {
      this.setState({ house: 'rock' })
    } else if (num === 3) {
      this.setState({ house: 'scissors' })
    } else if (num === 4) {
      this.setState({ house: 'lizard' })
    } else if (num === 5) {
      this.setState({ house: 'spock' })
    }
    this.verification()
  }
  savedData() {
    localStorage.setItem("score", this.state.score)
  }
  verification() {
    let s = this.state.score
    if (this.state.pick === this.state.house) {
      this.setState({ draw: true })
    } else if (this.state.pick !== this.state.house) {
      if (this.state.pick === 'rock') {
        if (this.state.house === 'scissors') {
          s++
          this.setState({ youWin: true, score: s })
        } else if (this.state.house === 'paper') {
          s--
          this.setState({ houseWin: true, score: s })
        }
        else if (this.state.house === 'lizard') {
          s++
          this.setState({ youWin: true, score: s })
        } else if (this.state.house === 'spock') {
          s--
          this.setState({ houseWin: true, score: s })
        }

      } else if (this.state.pick === 'paper') {
        if (this.state.house === 'scissors') {
          s--
          this.setState({ houseWin: true, score: s })

        } else if (this.state.house === 'rock') {
          s++
          this.setState({ youWin: true, score: s })
        } else if (this.state.house === 'lizard') {
          s--
          this.setState({ houseWin: true, score: s })
        } else if (this.state.house === 'spock') {
          s++
          this.setState({ youWin: true, score: s })
        }
      } else if (this.state.pick === 'scissors') {
        if (this.state.house === 'rock') {
          s--
          this.setState({ houseWin: true, score: s })
        } else if (this.state.house === 'paper') {
          s++
          this.setState({ youWin: true, score: s })
        } else if (this.state.house === 'lizard') {
          s++
          this.setState({ youWin: true, score: s })
        } else if (this.state.house === 'spock') {
          s--
          this.setState({ houseWin: true, score: s })
        }
      } else if (this.state.pick === 'lizard') {
        if (this.state.house === 'rock') {
          s--
          this.setState({ houseWin: true, score: s })
        } else if (this.state.house === 'paper') {
          s++
          this.setState({ youWin: true, score: s })
        } else if (this.state.house === 'scissors') {
          s--
          this.setState({ houseWin: true, score: s })
        } else if (this.state.house === 'spock') {
          s++
          this.setState({ youWin: true, score: s })
        }
      } else if (this.state.pick === 'spock') {
        if (this.state.house === 'paper') {
          s--
          this.setState({ houseWin: true, score: s })
        } else if (this.state.house === 'rock') {
          s++
          this.setState({ youWin: true, score: s })
        } else if (this.state.house === 'lizard') {
          s--
          this.setState({ houseWin: true, score: s })
        } else if (this.state.house === 'scissors') {
          s++
          this.setState({ youWin: true, score: s })
        }
      }
    }
    this.setState({ endgame: true })
    this.savedData()
  }
  handlerules() {
    this.setState({ rules: !this.state.rules })
  }
  handle_option(e) {
    if (e.target.localName === "img") {
      let name = e.target.parentNode.name;
      this.setState({ [name]: !this.state[name], pick: name, playing: true })
    } else {
      let name = e.target.name
      this.setState({ [name]: !this.state[name], pick: name, playing: true })
    }
  }
  tryAgain() {
    this.setState({ playing: false, house: "", pick: false, housepicked: false, endgame: false, youWin: false, houseWin: false, draw: false })
  }
  original_bonus() {
    this.setState({ bonus: !this.state.bonus })
  }
  render() {
    return (
      <div className="" id="container">
        <Header score={this.state.score} original_bonus={this.original_bonus} mode={this.state.bonus} />
        {
          this.state.playing ?
            <div className="d-flex justify-content-center align-items-center" id="wrapperResult">
              <div className="pick">
                < p className="letters">YOU PICKED</p>
                <Option name={this.state.pick} handle_option={this.handle_option} playing={this.state.playing} win={this.state.youWin} id={"wrapper_button_option"} />
              </div>
              {this.state.endgame ? <Result state={this.state} tryAgain={this.tryAgain} /> : <div className="m-5 p-5 fill"></div>}
              <div className="house">
                <p className="letters">YOU HOUSE PICKED</p>
                {
                  this.state.house === 'rock' || this.state.house === 'paper' || this.state.house === 'scissors' || this.state.house === 'lizard' || this.state.house === 'spock' ? <Option name={this.state.house} handle_option={this.handle_option} playing={this.state.playing} win={this.state.houseWin} id={"wrapper_button_option"} /> :
                    <HousePicked housePicked={this.housePicked} house={this.state.house} />
                }
              </div>
            </div> :
            this.state.bonus ? <MainBonus handle_option={this.handle_option} playing={this.state.playing} /> :
              <Main handle_option={this.handle_option} playing={this.state.playing} />

        }
        <div id="buttonRules">
          <button onClick={this.handlerules} className="btn btn-outline-light pr-4 pl-4">RULES</button>
        </div>
        {this.state.rules ? <Rules handlerules={this.handlerules} mode={this.state.bonus} /> : null}
      </div >
    );
  }
}

export default App;
