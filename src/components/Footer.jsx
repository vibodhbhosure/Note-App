import React from "react";

const curtyear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright @ {curtyear}</p>
    </footer>
  );
}

export default Footer;
