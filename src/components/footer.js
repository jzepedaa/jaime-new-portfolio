import React, { Component } from 'react';
import styled from 'styled-components';


const Styles = styled.div`
.background{
  /* padding-top:20px;
  padding-bottom: 20px;
  text-align: center;
  background-color:black;
  color: white;
  position: absolute;
   left: 0;
    bottom: 0;
    height: 100px;
    width: 100%;
    overflow: hidden; */
  position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: black;
   color: white;
   text-align: center;
   padding-top: 20px;
}
`;

class Footer extends Component {
  render() {
    return (
      <Styles>
        <div className="background ">
          <p >© 2019 J.Zepeda LLC</p>
        </div>
      </Styles>
    )
  }
}

export default Footer;