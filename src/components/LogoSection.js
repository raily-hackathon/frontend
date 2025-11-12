/* src/components/LogoSection.js */
import React from "react";
import { FaTrain } from "react-icons/fa";
import "./LogoSection.css";

function LogoSection() {
  return (
    <div className="logo-section">
      <div className="logo-title">
        <FaTrain size={60} />
        <h1>RAILY</h1>
      </div>
      <p>어쩌고 저쩌고 쏠라쏠라 꿈씨패밀리에게 질문을 해보세요!</p>
    </div>
  );
}

export default LogoSection;
