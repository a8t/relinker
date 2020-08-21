import PropTypes from "prop-types";
import React from "react";

function Layout({ children }) {
  return (
    <main className="container p-4 sm:p-6 m-auto lg:max-w-3xl">{children}</main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
