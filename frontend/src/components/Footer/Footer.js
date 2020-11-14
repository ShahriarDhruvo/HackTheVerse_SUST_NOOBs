import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-sm-6">
            <div className="row">
              <div className="col">
                <Link to={`/`}>
                  <img
                    src={"/static/img/github.png"}
                    width={"40"}
                    height={"40"}
                    className={"d-inline-block align-top"}
                    className="github"
                    alt={"logo"}
                  />
                </Link>
              </div>
              <div className="col">
                <Link to={`/`}>
                  <img
                    src={"/static/img/linkedin.png"}
                    width={"40"}
                    height={"40"}
                    className={"d-inline-block align-top"}
                    className="github"
                    alt={"logo"}
                  />
                </Link>
              </div>
              <div className="col">
                <Link to={`/`}>
                  <img
                    src={"/static/img/stackoverflow.png"}
                    width={"40"}
                    height={"40"}
                    className={"d-inline-block align-top"}
                    className="github"
                    alt={"logo"}
                  />
                </Link>
              </div>
              <div className="col">
                <Link to={`/`}>
                  <img
                    src={"/static/img/facebook.png"}
                    width={"40"}
                    height={"40"}
                    className={"d-inline-block align-top"}
                    className="github"
                    alt={"logo"}
                  />
                </Link>
              </div>
              <div className="col">
                <Link to={`/`}>
                  <img
                    src={"/static/img/twitter.png"}
                    width={"40"}
                    height={"40"}
                    className={"d-inline-block align-top"}
                    className="github"
                    alt={"logo"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <div>
            <p>
              Copyright &copy;{new Date().getFullYear()} | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;