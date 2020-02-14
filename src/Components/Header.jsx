import React, { Component } from 'react'
import anime from 'animejs'
export class Header extends Component {
    constructor(props) {
      super(props)    
      this.close = this.close.bind(this);
      this.show = this.show.bind(this);
  
    }
    
    close() {
        anime({
          targets: '.chatbox',
          translateX: [
            { value: 350, duration: 1000 },
          ],
          rotate: '4turn'
        })
        this.show();
      }
    
      show() {
        anime({
          targets: '.actions',
          translateX: [
            { value: 0, duration: 1000 },
          ],
          rotate: '2turn'
        })
      }
  render() {
    return (
      <div>
        <div className="ui header center aligned head">ChatBox
      <button class="ui close button btn_close" onClick={this.close}><i class="times circle icon"></i></button></div>
      </div>
    )
  }
}

export default Header;
