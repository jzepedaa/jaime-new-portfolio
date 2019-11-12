import React, { Component } from 'react';
import styled from 'styled-components';



const Styles = styled.div`
h1{
  text-align: center;
  color: white;
  padding: 30px;


}
`

class NoMatch extends Component {
  render() {
    return (
      <Styles>
        <div>
          <h1>404 PAGE NOT FOUND</h1>
        </div>
      </Styles>
    )
  }
}

export default NoMatch;