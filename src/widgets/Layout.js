import React from "react";

export default ({ sitemap, currentPage, children }) => {
  return (
    <div id="container">
      <div id="header">Header</div>
      {children}
      <div id="footer">Footer</div>
    </div>
  );
};
