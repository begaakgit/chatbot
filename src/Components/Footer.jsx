import React from 'react'

function Footer() {
  return (
    <div>
      <div className='ui form footer'>
        <div class="field inputfield">
        <input type="text" name="shipping[first-name]" placeholder="Enter your message"/>
      </div>
          <button class='ui button btnSend' ><i class="arrow alternate circle right icon " id="sendIcon"></i></button>
        </div>
    </div>
  )
}

export default Footer;
