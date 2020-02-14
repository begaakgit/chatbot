import React, { Component } from 'react'

export class Messages extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inCommingMsgs: props.inCommingMsgs,
      outGoingMsgs: props.outGoingMsgs,
      in: props.in,


    }
  }
  render() {
    function RenderOnlyMessage(props) {
      const inCommingMsgs = props.inCommingMsgs;
      const outGoingMsgs = props.outGoingMsgs;
      const inn = props.in;

      if (inn === true)
        return (
          <div>
            <div className="img">
            {/*<img src='http://emilcarlsson.se/assets/louislitt.png' />*/}
            <img src="./images/2.jpg" />
            </div>
          <div className='chat_IncommingMsg'>
            {inCommingMsgs}
          </div>
          </div>

        )
      else
        return (
          <div className='chat_OutGoingMsg'>
            {outGoingMsgs}
          </div>
        )
    }
    return (
      <div>

        <RenderOnlyMessage
          inCommingMsgs={this.state.inCommingMsgs}
          outGoingMsgs={this.state.outGoingMsgs}
          in={this.state.in}


        />
        {/*
        <div className='chat_IncommingMsg'>
          {this.state.inCommingMsgs}
        </div>
        <div className='chat_OutGoingMsg'>
          {this.state.outGoingMsgs}
        </div>
*/}
      </div>
    )
  }
}

export default Messages;
