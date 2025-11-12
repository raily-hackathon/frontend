/* src/components/Header.js */
import React from "react";
import "./Header.css";
// import MonkeyIcon from '../assets/monkey-icon.png'; // 실제 이미지가 있다면

function Header() {
  return (
    <nav className="header-nav">
      <div className="header-links">
        <a href="#">내 질문</a>
        <a href="#">내 여행</a>
      </div>
      <div className="profile-icon">
        {/* 임시로 텍스트 아이콘 사용, 실제로는 img 태그 사용 */}
        <span>🐵</span>
        {/* <img src={MonkeyIcon} alt="Profile" /> */}
      </div>
    </nav>
  );
}

export default Header;
