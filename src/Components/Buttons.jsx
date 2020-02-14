import React, { Component } from 'react'
import anime from 'animejs';
class Buttons extends Component {
  constructor(props) {
    super(props);
    
    this.actions=this.actions.bind(this);
    this.hide=this.hide.bind(this);
    this.show=this.show.bind(this);
  }
  actions() {
    this.hide();
  }
  hide(){
    anime({
      targets:'.actions',
      translateX:[
        {value:350,duration:1200},
      ],
      
    })
    
    this.show();
  }
  show(){
    anime({
      targets:'.chatbox',
      translateX:[
        {value:0,duration:1000},
      ],
      rotate:'4turn'
    })
  }

  render() {
    const styles = {

      position: this.props.objOfButton.position,
      right: this.props.objOfButton.right,
      top: this.props.objOfButton.top,
      borderRadius: this.props.objOfButton.borderRadius,
      width: this.props.objOfButton.width
    };
    return (
      <div>
        <button className="ui button animations btn" style={styles}
          onClick={this.actions}
          onMouseEnter ={e => {
            anime({
              targets: e.currentTarget,
              backgroundColor: "hsl(200, 50%, 50%)",
              scale: {
                value: 0.90,
                delay: 300,
                duration: 500
              }
            })
          }}
          onMouseOut={e => {
            anime({
              targets: e.currentTarget,
              backgroundColor: "hsl(210, 3%, 88%)",
              scale: {
                value: 1,
                delay: 300,
                duration: 500
              }
            })
          }}

        >
          <i class={'' + this.props.objOfButton.icon + ' icon'}></i></button>

      </div>
    )
  }
}
export default Buttons;
