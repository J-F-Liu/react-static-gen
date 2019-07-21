import React from "react";
import _ from "lodash";
import styled from "@emotion/styled";
import Layout from "../widgets/Layout";

const Content = styled.div`
  height: 250px;
  width: 1200px;
  margin: 25px auto;
`;

export default ({ sitemap, page }) => {
  return (
    <Layout sitemap={sitemap} currentPage={page}>
      <Content>Home page</Content>
    </Layout>
  );
};
