/* src/components/SearchBar.js */
import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar-container">
      <input type="text" placeholder="어떤 질문을 해볼까요?" />
      <div className="search-icons">
        <FaMicrophone className="icon" />
        <IoSend className="icon send-icon" />
      </div>
    </div>
  );
}

export default SearchBar;
