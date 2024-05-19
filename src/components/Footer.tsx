import React from "react";

const Footer = () => {
  return (
    <footer className=" border-t p-5 text-center">
      <span>
        &copy; {new Date().getFullYear()} Coder&#39;s Book All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
