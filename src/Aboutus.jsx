import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { BrowserRouter, Route } from "react-router-dom";
export class Aboutus extends Component {
  render() {
      const {data} =this.props  
    return (
      
      <div>
          <Link to={`/show/${data.id}`}>
        <h1>{data.name}</h1>
        <h1>{data.id}</h1>
        
        </Link>
        <h1>
          lskdflsjfk
          sdlkfjsldjfklsdf
          sfksjdflsd
           slkflks  slkdjkfdsjlf 
           w eopew 
           About us 
           
           </h1>
      </div>
      
    )
  }
}
export default Aboutus

{/*

  
import React, { Component } from 'react'

export class Showpage extends Component {
  render() {
      const {data} =this.props  
    return (
      <div>
        <h1>{data.name}</h1>
        <h1>{data.id}</h1>

      </div>
    )
  }
}

export default Showpage
*/}
