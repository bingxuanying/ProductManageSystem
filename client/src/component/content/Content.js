import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import Content from "../box/UserInfoTable";
import Content from "../box/ProductInfoTable";
import Content from "../box/OperatingFloor";
import "./Content.css";

class Content extends Component {
  render() {
    return (
      <div
        className="content-canvas"
        style={
          this.props.toggleOn === true
            ? { margin: " 0 0 0 230px", width: "calc(100% - 230px)" }
            : { margin: " 0 0 0 70px", width: "calc(100% - 70px)" }
        }
      >
        <section className="content-header">
          <h1>
            Dashboard
            <small>Version 1.0</small>
          </h1>
          <ol className="content-header-route">
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className="content-header-fa"
                  icon={faTachometerAlt}
                  size="xs"
                ></FontAwesomeIcon>{" "}
                Home
              </a>
            </li>
            <li class="end-route">Dashboard</li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <UserInfoTable />
            <ProductInfoTable />
            <OperatingFloor />
          </div>
          <div className="row"></div>
          <div className="row"></div>
        </section>
      </div>
    );
  }
}

export default Content;