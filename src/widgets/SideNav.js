import React from "react";
import styled from "@emotion/styled";

const Nav = styled.nav`
  #item {
    margin: 0px 100px 0px 0px;
    width: 200px;
    height: 200px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    float: left;
  }
  #item ul li {
    list-style-type: none;
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 2px;
  }

  #item li a:link,
  a:visited {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
  }
  #item li a:hover,
  a:active {
    color: #ec6f31;
  }
  #item ul li#catalog {
    background-color: #ec6f31;
  }
  #item ul li#catalog a {
    color: #ffffff;
    font-weight: bolder;
    letter-spacing: 10px;
  }
`;

export default ({ title, items }) => {
  return (
    <Nav
      className="bs-docs-sidebar hidden-print hidden-xs hidden-sm"
      data-spy="affix"
      data-offset-top="278"
    >
      <div id="item">
        <ul>
          <li id="catalog">
            <a href="#">{title}</a>
          </li>
          {items.map(([id, name]) => (
            <li key={id}>
              <a href={"#" + id}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </Nav>
  );
};
