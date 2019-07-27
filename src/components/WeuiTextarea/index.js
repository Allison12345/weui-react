import React, { Component, Fragment } from 'react'

class WeuiTextarea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  onInputChange = ({ target }) => {
    const { value } = target
    this.setState({ value })
    this.props.onInput && this.props.onInput(value)
  }
  render() {
    return (
      <Fragment>
        <textarea
          className="weui-textarea"
          maxLength={this.props.limit}
          onChange={this.onInputChange}
        />
        <div className="weui-textarea-counter">
          <span>{`${this.state.value.length}/${this.props.limit}`}</span>
        </div>
      </Fragment>
    )
  }
}
export default WeuiTextarea
