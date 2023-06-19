import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header.js'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


function Rules({ handlerules, mode }) {
  return (
    <div className="d-flex justify-content-center align-items-center" id="WrapperRules">
      <div id="rules">
        <div className="d-flex justify-content-between mb-4">
          <span>RULES</span>
          <button onClick={handlerules}>
            <svg className="bi bi-x-square-fill" width="1.5rem" height="1.5rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.854 4.854a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z" />
            </svg>
          </button>
        </div>
        <img src={mode ? './asset/image-rules-bonus.svg' : './asset/image-rules.svg'} alt="rules" />
      </div>
    </div>
  )
}


function Option({ playing, handle_option, win, name, position, id }) {
  let shadow = ''
  if (win) shadow = 'wrapper_button_option_shadow'
  const handleclick = (e) => {
    if (!playing) handle_option(e)
  }
  return (
    <div className={name + " " + position + " " + shadow} id={id}>
      <button
        onClick={(ev) => handleclick(ev)}
        className="button_option" name={name}>
          <img src={"./asset/icon-" + name + ".svg"} alt={name} />
      </button>
    </div>
  )
}

function MainBonus ({ handle_option, playing }){
  return (
    <div className="" id="main_bonus">
      <div className="paper_bonus">
        <Option
          name="paper"
          handle_option={handle_option}
          playing={playing}
          id={"wrapper_button_option_bonus"}
        /></div>
      <div className="scissors_bonus">
        <Option
          name="scissors"
          handle_option={handle_option}
          playing={playing}
          id={"wrapper_button_option_bonus"}
        /></div>
      <div className="rock_bonus">
        <Option
          name="rock"
          handle_option={handle_option}
          playing={playing}
          id={"wrapper_button_option_bonus"}
        /></div>
      <div className="lizard_bonus">
        <Option
          name="lizard"
          handle_option={handle_option}
          playing={playing}
          id={"wrapper_button_option_bonus"}
        /></div>
      <div className="spock_bonus">
        <Option
          name="spock"
          handle_option={handle_option}
          playing={playing}
          id={"wrapper_button_option_bonus"}
        /></div>
    </div>
  )
}

function Main({ handle_option, playing }) {
  return (
    <div className="" id="main">
      <div className="left">
        <Option
          name="paper"
          handle_option={handle_option}
          playing={playing}
          id={"wrapper_button_option"}
        /></div>
      <div className="right">
        <Option
          name="scissors"
          handle_option={handle_option}
          playing={playing}
          id={"wrapper_button_option"}
        /></div>
      <div className="down">
        <Option
          name="rock"
          handle_option={handle_option}
          playing={playing}
          id={"wrapper_button_option"}
        /></div>
    </div>
  )
}



function HousePicked({ housePicked, house }) {
  useEffect(() => {
    setTimeout(() => {
      housePicked()
    }, 1000);
  }, [])

  return (
    <div className="empty">
      
    </div>
  )
}


function Result ({ youWin, houseWin, tryAgain }) {
  return (
    <div className="" id="result">
      <p className="letters_result">{
        youWin ? 'YOU WIN' :
        houseWin ? 'YOU LOSE' : 'DRAW'
      }</p>
      <button onClick={tryAgain} className="btn btn-light">PLAY AGAIN</button>
    </div>
  )
}



export default function Home() {
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [bonus, setBonus] = useState(false);
  const [rules, setRules] = useState(false);
  const [rock, setRock] = useState(false);
  const [paper, setPaper] = useState(false);
  const [scissors, setScissors] = useState(false);
  const [pick, setPick] = useState(false);
  const [lizard, setLizard] = useState(false);
  const [spock, setSpock] = useState(false);
  const [housepicked, setHousepicked] = useState(false);
  const [house, setHouse] = useState(false);
  const [youWin, setYouWin] = useState(false);
  const [houseWin, setHouseWin] = useState(false);
  const [draw, setDraw] = useState(false);
  const [result, setResult] = useState(false);
  const [endgame, setEndGame] = useState(false);

  useEffect(() => {
    let score = localStorage.getItem('score')
    if (score !== null) setScore(score)
  });

  const handle_option = (ev) => {
    let name;
    if (ev.target.localName === "img") {
      name = ev.target.parentNode.name;
    } else {
      name = ev.target.name
    }

    switch (name) {
      case 'paper':
        setPaper(!paper);
        setPick(name);
        setPlaying(true);
        break;

      case 'scissors':
        setScissors(!scissors);
        setPick(name);
        setPlaying(true);
        break;

      case 'rock':
        setRock(!rock);
        setPick(name);
        setPlaying(true);
        break;

      case 'lizard':
        setLizard(!lizard);
        setPick(name);
        setPlaying(true);
        break;
      
      case 'spock':
        setSpock(!spock);
        setPick(name);
        setPlaying(true);
        break;
    }
  }

  const tryAgain = () => {
    setPlaying(false);
    setPick(false);
    setHousepicked(false);
    setEndGame(false);
    setYouWin(false);
    setHouseWin(false);
    setDraw(false);
    setHouse("");
  }

  const savedData = () => {
    localStorage.setItem("score", score)
  }

  const verification = () => {
    let s = score
    console.log(pick + "|" + house);
    if (pick === house) {
      setDraw(true);
    } else if (pick !== house) {
      if (pick === 'rock') {
        if (house === 'scissors') {
          s++
          setYouWin(true);
          setScore(s);
        } else if (house === 'paper') {
          s--
          setHouseWin(true);
          setScore(s);
        }
        else if (house === 'lizard') {
          s++
          setYouWin(true);
          setScore(s);
        } else if (house === 'spock') {
          s--
          setHouseWin(true);
          setScore(s);
        }

      } else if (pick === 'paper') {
        if (house === 'scissors') {
          s--
          setHouseWin(true);
          setScore(s);
        } else if (house === 'rock') {
          s++
          setYouWin(true);
          setScore(s);
        } else if (house === 'lizard') {
          s--
          setHouseWin(true);
          setScore(s);
        } else if (house === 'spock') {
          s++
          setYouWin(true);
          setScore(s);
        }
      } else if (pick === 'scissors') {
        if (house === 'rock') {
          s--
          setHouseWin(true);
          setScore(s);
        } else if (house === 'paper') {
          s++
          setYouWin(true);
          setScore(s);
        } else if (house === 'lizard') {
          s++
          setYouWin(true);
          setScore(s);
        } else if (house === 'spock') {
          s--
          setHouseWin(true);
          setScore(s);
        }
      } else if (pick === 'lizard') {
        if (house === 'rock') {
          s--
          setHouseWin(true);
          setScore(s);
        } else if (house === 'paper') {
          s++
          setYouWin(true);
          setScore(s);
        } else if (house === 'scissors') {
          s--
          setHouseWin(true);
          setScore(s);
        } else if (house === 'spock') {
          s++
          setYouWin(true);
          setScore(s);
        }
      } else if (pick === 'spock') {
        if (house === 'paper') {
          s--
          setHouseWin(true);
          setScore(s);
        } else if (house === 'rock') {
          s++
          setYouWin(true);
          setScore(s);
        } else if (house === 'lizard') {
          s--
          setHouseWin(true);
          setScore(s);
        } else if (house === 'scissors') {
          s++
          setYouWin(true);
          setScore(s);
        }
      }
    }
    setEndGame(true);
    savedData()
  }

  const chooseHousePicked = () => {
    let num;
    if (bonus) {
      num = Math.floor(Math.random() * (5 - 1 + 1) + 1)
    } else {
      num = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    }
    if (num === 1) {
      setHouse('paper');
    } else if (num === 2) {
      setHouse('rock');
    } else if (num === 3) {
      setHouse('scissors');
    } else if (num === 4) {
      setHouse('lizard');
    } else if (num === 5) {
      setHouse('spock');
    }
    verification()
  }

  const original_bonus = () => {
    setBonus(!bonus);
  }

  const handlerules = () =>  {
    setRules(!rules);
  }


  return (
    <>
      <Head>
        <title>Rock Papper Scissor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"></link>
        <link rel="icon" href="asset/icono.png" />
      </Head>
      <main className="">
        <div className="" id="container">
          <Header score={score} />
          {
            playing ?
              <div className="d-flex justify-content-center align-items-center" id="wrapperResult">
                <div className="pick">
                  < p className="letters">YOU PICKED</p>
                  <Option
                    name={pick}
                    handle_option={handle_option}
                    playing={playing}
                    win={youWin}
                    id={"wrapper_button_option"}
                  />
                </div>
                {endgame ?
                <Result
                  youWin={youWin}
                  houseWin={houseWin}
                  tryAgain={tryAgain}
                  /> : <div className="m-5 p-5 fill"></div>}
                <div className="house">
                  <p className="letters">YOU HOUSE PICKED</p>
                  {
                    house === 'rock' || house === 'paper' ||
                    house === 'scissors' || house === 'lizard' ||
                    house === 'spock' ?
                    <Option
                      name={pick}
                      handle_option={handle_option}
                      playing={playing}
                      win={youWin}
                      id={"wrapper_button_option"}
                      /> :
                      <HousePicked
                        housePicked={chooseHousePicked}
                        house={house}
                      />
                  }
                </div>
              </div> :
              bonus ? <MainBonus handle_option={handle_option} playing={playing} /> :
                <Main handle_option={handle_option} playing={playing} />
          }
          <button
            onClick={original_bonus}
            className="btn btn-outline-info ml-2"
            id="bonus"
          >
            {bonus ? "Original" : "Bonus"}
          </button>
          <div id="buttonRules">
            <button
              onClick={handlerules}
              className="btn btn-outline-light pr-4 pl-4"
            >
              RULES
            </button>
          </div>
          {rules ? <Rules handlerules={handlerules} mode={bonus} /> : null}
        </div >
      </main>
    </>
  )
}
