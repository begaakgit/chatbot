import React, { Component } from "react";
//import { Spring } from 'react-spring'
import Buttons from "./Components/Buttons";

import anime from "animejs";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Messenger from "./Messenger";
import Footer from "./Components/Footer";
import Showpage from "./Showpage";

import  { Redirect } from 'react-router-dom'
import Aboutus from "./Aboutus";

class Chatbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        1: {
          name: "danish",
          id: 1
        },
        2: {
          name: "danish ali",
          id: 2
        },
        
      },

      objOfPhoneButton: {
        icon: "phone"
      },
      objOfMessageButton: {
        icon: "envelope",
        position: "absolute",
        right: "102px",
        top: "0px",
        borderRadius: "10px 0px 0px 10px",
        width: "100px"
      }
    };
    this.action = this.action.bind(this);
  }
  componentDidMount() {
    anime({
      targets: ".chatbox",
      translateX: [{ value: 350, duration: 1200 }]
    });
  }
  action() {
    return (
      <div class="ui bottom attached active tab segment">
        <p></p>
        <p></p>
      </div>
    );
  }
  render() {

    const ProtectedComponent = () => {
         return <Redirect to='/Showpage'  />
     }
     
    return (

        <div>
          <div class="ui top attached tabular menu">
            <div class="active item">
              <a href="#" onClick={this.action}>
                Tab2
              </a>
            </div>
            <div class="active item">Tab2</div>
            <div class="active item">Tab3</div>
          </div>
          <div class="ui bottom attached active tab segment">
            <p></p>
            <p></p>
          </div>

          <div class="ui form">
            <div class=" fields">
              <div class="field">
                <label>First name</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div class="field">
                <label>Middle name</label>
                <input type="text" placeholder="Middle Name" />
              </div>
              <div class="field">
                <label>Middle name</label>
                <textarea></textarea>
              </div>
            </div>
          </div>
          <div className="actions">
            <Buttons objOfButton={this.state.objOfPhoneButton} />
            <Buttons objOfButton={this.state.objOfMessageButton} />
          </div>
          
        <Router>
          <div>
          <ul>
            <li> <Link to='/'>Home</Link> </li>
            <li><Link to='/showpage'>SHowpage</Link></li>
            <li><Link to='/aboutus'>aboutus</Link></li>
          </ul>
          <Route exact path='/' Component={Messenger}/>
          <Route path='/showpage' Component={Showpage}/>
          <Route path='/aboutus' Component={Aboutus}/>
          
          </div>
        </Router>
          </div>
    );
  }
  
}


export default Chatbox;


{/*
        <BrowserRouter>
          <Route exactpath="/" component={props => <Messenger {...props} />} />
          <Route
            exact
            path="/show/:id"
            component={props => (
              <Showpage
                {...props}
                data={this.state.data[props.match.params.id]}
              />
            )} 
          />
                </BrowserRouter>
            */}