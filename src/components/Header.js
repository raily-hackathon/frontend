/* src/components/Header.js */
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// import MonkeyIcon from '../assets/monkey-icon.png'; // 실제 이미지가 있다면

function Header() {
  return (
    <nav className="header-nav">
      <div className="header-links">
        <Link to="/my-questions">내 질문</Link>
        <Link to="/my-trips">내 여행</Link>
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
