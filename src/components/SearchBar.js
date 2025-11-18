/* src/components/SearchBar.js */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import "./SearchBar.css";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar-container">
      <input
        type="text"
        placeholder="어떤 질문을 해볼까요?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <div className="search-icons">
        <FaMicrophone className="icon" />
        <IoSend className="icon send-icon" onClick={handleSearch} />
      </div>
    </form>
  );
}

export default SearchBar;
