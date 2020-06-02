import React from 'react'

export default class HousePicked extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.housePicked()
    }, 1000);
  }
  render() {
    return (
      <div className="empty">

      </div>
    )
  }
}