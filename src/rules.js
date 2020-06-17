import React from 'react'


export default class Rules extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center" id="WrapperRules">
        <div id="rules">
          <div className="d-flex justify-content-between mb-4">
            <span>RULES</span>
            <button onClick={this.props.handlerules}>
              <svg className="bi bi-x-square-fill" width="1.5rem" height="1.5rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.854 4.854a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z" />
              </svg>
            </button>
          </div>
          <img src={this.props.mode ? './asset/image-rules-bonus.svg' : './asset/image-rules.svg'} alt="rules" />
        </div>
      </div>
    )
  }
}