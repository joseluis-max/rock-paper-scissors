import React, {useState,useEffect} from 'react';
import './App.css';

import Header from './header'
import Main, { Option, MainBonus } from './main'
import Rules from './rules'
import Result from './result'
import HousePicked from './housePicked'

function App (){
  const [score, setScore] = useState(0);
  const [paper, setPaper] = useState(false);
  const [rock, setRock] = useState(false);
  const [scissors, setScissors] = useState(false);
  const [spock, setSpock] = useState(false);
  const [lizard, setLizard] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [pick, setPick] = useState(false);
  const [youWin, setYouWin] = useState(false);
  const [houseWin, setHouseWin] = useState(false);
  const [result, setResult] = useState(false);
  const [endgame, setEndGame] = useState(false);
  const [house, setHouse] = useState('');
  const [housePicket, setHousePicket] = useState(false);
  const [draw, setDraw] = useState(false);
  const [bonus, setBonus] = useState(false);
  const [rules, setRules] = useState(false);
  useEffect(()=>{
    let score = localStorage.getItem('score');
    if (score !== null || undefined) {
      setScore(score)
    }
  },[])
  // LEER SOBRE REACT USEEFFECT
  function housePicked() {
    let num;
    if (bonus) {
      num = Math.floor(Math.random() * (5 - 1 + 1) + 1)
    } else {
      num = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    }
    // Remplazar un switch para mejor lectura.
    if (num === 1) {
     setPaper({ paper: 'paper' })
    } else if (num === 2) {
      setRock({ rock: 'rock' })
    } else if (num === 3) {
       setScissors({ scissors: 'scissors' })
    } else if (num === 4) {
       setLizard({ lizard: 'lizard' })
    } else if (num === 5) {
       setSpock({ spock: 'spock' })
    }
    verification()
  }
  function savedData() {
    localStorage.setItem("score", score)
  }
  function verification() {
    let s = score
    if (pick === house) {
      setDraw(true)
    } else if (pick !== house) {
      if (pick === 'rock') {
        if (house === 'scissors') {
          s++
          setYouWin(true)
          setScore(s)
        } else if (house === 'paper') {
          s--
          setHouseWin(true)
          setScore(s)
        }
        else if (house === 'lizard') {
          s++
          setYouWin(true)
          setScore(s)
        } else if (house === 'spock') {
          s--
          setHouseWin(true)
          setScore(s)
        }

      } else if (pick === 'paper') {
        if (house === 'scissors') {
          s--
          setHouseWin(true)
          setScore(s)
        } else if (house === 'rock') {
          s++
         setYouWin(true)
          setScore(s)
        } else if (house === 'lizard') {
          s--
          setHouseWin(true)
          setScore(s)
        } else if (house === 'spock') {
          s++
         setYouWin(true)
          setScore(s)
        }
      } else if (pick === 'scissors') {
        if (house === 'rock') {
          s--
          setHouseWin(true)
          setScore(s)
        } else if (house === 'paper') {
          s++
         setYouWin(true)
          setScore(s)
        } else if (house === 'lizard') {
          s++
          setYouWin(true)
          setScore(s)
        } else if (house === 'spock') {
          s--
         setHouseWin(true)
          setScore(s)
        }
      } else if (pick === 'lizard') {
        if (house === 'rock') {
          s--
         setHouseWin(true)
          setScore(s)
        } else if (house === 'paper') {
          s++
          setYouWin(true)
          setScore(s)
        } else if (house === 'scissors') {
          s--
         setHouseWin(true)
          setScore(s)
        } else if (house === 'spock') {
          s++
         setYouWin(true)
          setScore(s)
        }
      } else if (pick === 'spock') {
        if (house === 'paper') {
          s--
          setHouseWin(true)
          setScore(s)
        } else if (house === 'rock') {
          s++
         setYouWin(true)
          setScore(s)
        } else if (house === 'lizard') {
          s--
          setHouseWin(true)
          setScore(s)
        } else if (house === 'scissors') {
          s++
         setYouWin(true)
          setScore(s)
        }
      }
    }
    setEndGame(true)
    savedData()
  }
  function handlerules() {
    setRules(!rules)
  }
  function handle_option(e) {
    if (e.target.localName === "img") {
      let name = e.target.parentNode.name;
      setPick(name)
      setPlaying(true)
    } else {
      let name = e.target.name
       setPick(name)
       setPlaying(true)
      //setState({ [name]: !data[name], pick: name, playing: true })
    }
  }
  function tryAgain() {
   // setScore({ playing: false, house: "", pick: false, housepicked: false, endgame: false, youWin: false, houseWin: false, draw: false })
   setPlaying(false);
   setHouse('');
   setPick(false);
   setHousePicket(false);
   setEndGame(false);
   setYouWin(false);
   setHouseWin(false);
   setDraw(false);
  }
  function original_bonus() {
    setBonus(!bonus)
  }
  return(
     <div className="" id="container">
        <Header score={score} />
        {
          playing ?
            <div className="d-flex justify-content-center align-items-center" id="wrapperResult">
              <div className="pick">
                < p className="letters">YOU PICKED</p>
                <Option name={pick} handle_option={handle_option} playing={playing} win={youWin} id={"wrapper_button_option"} />
              </div>
              {endgame ? <Result  tryAgain={tryAgain} /> : <div className="m-5 p-5 fill"></div>}
              <div className="house">
                <p className="letters">YOU HOUSE PICKED</p>
                {
                  house === 'rock' || house === 'paper' || house === 'scissors' || house === 'lizard' || house === 'spock' ? <Option name={house} handle_option={handle_option} playing={playing} win={houseWin} id={"wrapper_button_option"} /> :
                    <HousePicked housePicked={housePicked} house={house} />
                }
              </div>
            </div> :
            bonus ? <MainBonus handle_option={handle_option} playing={playing} /> :
              <Main handle_option={handle_option} playing={playing} />

        }
        <button onClick={original_bonus} className="btn btn-outline-info ml-2" id="bonus">{bonus ? "Original" : "Bonus"}</button>
        <div id="buttonRules">
          <button onClick={handlerules} className="btn btn-outline-light pr-4 pl-4">RULES</button>
        </div>
        {rules ? <Rules handlerules={handlerules} mode={bonus} /> : null}
      </div >
  )
}
export default App;
