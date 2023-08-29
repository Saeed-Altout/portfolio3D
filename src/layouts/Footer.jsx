import React from "react";
import { flex } from "../styles";

const Footer = () => {
  const nowYear = new Date();
  return (
    <footer className={`${flex.centerCenter} bg-primary py-5 font-medium`}>
      <p className="">
        Copyright Ⓒ Portfolio 3D {nowYear.getFullYear()},{" "}
        <span className="font-semibold text-secondary">Saeed Altout, </span>
        All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
