import React, { Component } from 'react'
import anime from 'animejs'
import Buttons from './Buttons';
import Header from './Header';
import Messages from './Messages';
import Footer from './Footer';

export class Box extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [

        {
          inCommingMsgs: 'Hye!',
          in : true
        },
          
        {
          outGoingMsgs: 'Hello!',
          in:false
        },
        {
          inCommingMsgs: 'Whats up baby ?',
          in : true
        },
          
        {
          outGoingMsgs: 'Noting special ',
          in:false
        },
        {
          inCommingMsgs: 'Lets hang up :) ',
          in : true
        },
          
        {
          outGoingMsgs: 'i am Busy Right Now :(',
          in:false
        },
        {
          inCommingMsgs: 'Ooo come on sweety',
          in : true
        },
        
          
        {
          outGoingMsgs: 'Okay fine',
          in:false
        },
      ],
    }
  }
  render() {

    const msgs = [];
    this.state.characters.forEach(item => {
      msgs.push(<Messages
        inCommingMsgs={item.inCommingMsgs}
        outGoingMsgs={item.outGoingMsgs}
        in={item.in}
        
        
      />)
    });

    return (
      <div className="chatbox ">
        <div className='segment'>
          <Header />
        </div>
        <div className='segment chatBoxBody'>
          {msgs}
        </div>
        <Footer/>
      </div>


    )
  }
}

export default Box;
