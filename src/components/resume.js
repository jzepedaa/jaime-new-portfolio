import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import styled from 'styled-components';
import Footer from "./footer";


const Styles = styled.div`
.layout{
  margin-top:30px;
  padding-top: 30px;
  padding-bottom: 40px;
}


`


class Resume extends Component {
  render() {
    return (
      <Styles>
        <div className="layout">

          <Grid >
            <Cell col={4}>
              {/* <div style={{ textAlign: 'center' }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div> */}

              <h2 style={{
                // paddingTop: '2em' 
              }}>Jaime Zepeda</h2>
              <h4 style={{ color: 'grey' }}>Programmer</h4>
              <hr style={{ borderTop: '3px solid black', width: '50%' }} />
              <h5>Technical Skills</h5>
              
              <p>HTML, CSS, SQL, JavaScript, Heroku, AngularJS, C#, .Net, API, jQuery, Visual Studio, MongoDB, React-Bootstrap, Bootstrap, GitHub, Node.js, Express.js, Databases, Ajax, React.js</p>
              <hr style={{ borderTop: '3px solid black', width: '50%' }} />
              <h5>Phone</h5>
              <p>(773) 414-5210</p>
              <h5>Email</h5>
              <p>jxzepeda@gmail.com</p>
              {/* <h5>Web</h5>
            <p>mywebsite.com</p> */}
              <hr style={{ borderTop: '3px solid black', width: '50%' }} />
            </Cell>
            <Cell className="resume-right-col" col={8}>
              <h2>Education</h2>


              <Education
                startYear={2019}
                endYear={2019}
                schoolName="NorthWestern University"
                schoolDegree="Full Stack Coding Bootcamp"
              // schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Education
                startYear={2013}
                endYear={2017}
                schoolName="Roosevelt university"
                schoolDegree="Bachelors in Computer Science"
              // schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <hr style={{ borderTop: '3px solid black' }} />

              <h2>Experience</h2>

              <Experience
                startYear={2019}
                endYear={2019}
                jobName="Sway Brand"
                jodTitle="Web and Mobile App Developer"
                jobDescription="Worked with React.js, Node.js.
                Developed front-end websites via HTML/CSS/Javascript/Jquery. Maintained and modified various existing web applications. Promptly resolved problems that occurred on live sites. Took ownership of projects and drove them to completion on schedule. Had conference calls with client to know what implementations toa dd to website. Created components to implement them on current website."
              />

              <Experience
                startYear={2012}
                endYear={2019}
                jobName="One Off Hospitality (Big Star)"
                jodTitle=" IT / Barback / Foodrunner"
                jobDescription="Help Troubleshoot Ipad's when not working properly during service. Resolve customer issues by listening and finding creative solutions to rectify the situation. Coordinate with restaurant staff to achieve and improve upon high-level customer satisfaction at a top-performing restaurant. "
              />
              <hr style={{ borderTop: '3px solid black' }} />
              <h2>Skills</h2>
              <Skills
                skill="React"
                progress={95}
              />
              <Skills
                skill="HTML/CSS"
                progress={80}
              />
              <Skills
                skill="javascript"
                progress={75}
              />
              <Skills
                skill="NodeJS"
                progress={75}
              />



            </Cell>
          </Grid>

        </div>
        <Footer />
      </Styles >
    )
  }
}

export default Resume;
