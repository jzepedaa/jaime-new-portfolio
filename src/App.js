import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';



import styled from 'styled-components';


const Styles = styled.div`




.header-color, .drawer-color {
  background: black;
  color: white;
}
@media screen and (max-width: 1024px){
  .mdl-layout__drawer-button {
      margin: 4px;
      color: grey;
      border: 3px solid grey;
  }
}

`
class App extends Component {
  render() {
    return (
      <Styles>
        <div className="demo-big-content">
          <Layout>
            <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Jaime Zepeda</Link>} scroll>
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
              </Navigation>
            </Header>
            <Drawer className="drawer-color" title={<Link style={{ textDecoration: "white", color: 'white' }} to="/">Jaime</Link>}>
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>




        </div>
      </Styles>

    );
  }
}

export default App;
