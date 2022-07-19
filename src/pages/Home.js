import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from "@material-ui/icons/GitHub";
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I'm Swetha</h2>
        <div className="prompt">
          <p>
            A Software developer with a passion for learning and creating
            interesting apps!
          </p>
          <LinkedInIcon
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/swetha-p-shivakumar/",
                "_blank"
              )
            }
          />
          <GitHubIcon
            onClick={() =>
              window.open("https://github.com/SwethaPShivakumar", "_blank")
            }
          />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, Javascript, Bootstrap, Tailwind</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Ruby, Ruby on Rails, SQL, MVC Architecture</span>
          </li>
          <li className="item">
            <h2>Other Skills</h2>
            <span>Jira tool, Selenium Webdriver,Postman</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home
