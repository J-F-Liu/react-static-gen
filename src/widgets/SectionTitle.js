import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Row } from "../components/Flexbox";

const Title = styled(Row)`
  ${p =>
    !p.isFirst &&
    css`
      padding-top: 40px;
    `}
  img {
    margin-right: 5px;
  }
  h3 {
    color: rgb(236, 111, 49);
    font-weight: bolder;
    margin-top: 14px;
    a {
      font-weight: bolder;
      color: #ec6f31;
    }
    a:hover,
    a:active {
      text-decoration: none;
      color: #ec6f31;
    }
  }
`;

export default ({ children, isFirst, ...props }) => {
  return (
    <Title valign="middle" isFirst={isFirst} {...props}>
      <img src="image/star.png" className="star" />
      <h3>{children}</h3>
    </Title>
  );
};
