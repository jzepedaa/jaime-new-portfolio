import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import styled from 'styled-components';
import jaime from '../photos/Jaime.jpg';
import { Container } from 'react-bootstrap';
import Footer from "./footer";


const Styles = styled.div`
.title{
  width: 100%;
  margin: auto;
}
.landing-grid {
background-image: url('https://images.wallpaperscraft.com/image/dark_black_and_white_abstract_black_background_76353_2560x1440.jpg');
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.avatar-img {
  height: 250px;
  padding-top: 5em;
  border-radius: 50%;
}
.banner-text {
  /* background-color: black; */
  color: white;
  opacity: .9;
  width: 75%;
  margin: auto;
  border-radius: 10px;
}

.banner-text h1 {
  /* font-size: 66px; */
  font-weight: bold;
  color: white;
}
.banner-text hr {
  border-top: 5px dotted white;
  width: 100%;
  margin: auto;
}
.banner-text p {
  color: white;
  font-size: 20px;
  padding: 1em;
}


.social-links {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: auto;
}

.social-links i {
  color: white;
  font-size: 5em;
  padding: 8px;
}

.links{
  text-align: center;
}



`

class Landing extends Component {
  render() {
    return (
      <Styles>
        <div className="title">
          <Grid className="landing-grid">
            <Cell col={1}></Cell>
            <Cell col={10}>
              <img src={jaime} alt="jaime" className="avatar-img" />
              <div className="banner-text">
                <Container>
                  <h1>Frontend Developer</h1>

                  <hr />
                  <div className="social-links">


                    <a className="links" href="https://www.linkedin.com/in/jaime-zepeda02/" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>

                    <a className="links" href="https://github.com/jzepedaa" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true" />
                    </a>

                  </div>

                  <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

                </Container>
              </div>

            </Cell>
            {/* <Cell col={1}></Cell> */}
          </Grid>

        </div>
        <Footer />

      </Styles>
    )
  }
}

export default Landing;