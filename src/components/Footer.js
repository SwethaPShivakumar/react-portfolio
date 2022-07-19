import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p>&copy; 2022 swethaps.com</p>
    </div>
  );
}

export default Footer;
