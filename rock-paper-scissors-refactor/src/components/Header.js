export default function Header({ score }) {
    return (
        <div className="d-flex justify-content-between align-items-center" id="header">
          <img src='./asset/logo.svg' alt="logo" />
          <div className="text-center" id="wrapper-score">
            <span className="" id="score">SCORE</span>
            <span id="num-score">{score}</span>
          </div>
        </div>
    );
}
