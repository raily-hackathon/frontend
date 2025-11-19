/* src/pages/Home.js */
import React from "react";
import Header from "../components/Header";
import LogoSection from "../components/LogoSection";
import SearchBar from "../components/SearchBar";
import RecommendationSection from "../components/RecommendationSection";
import "./Home.css";

// 추천 카드에 들어갈 임시 데이터
const recommendationData = {
  title: "하레하레",
  description:
    "이 빵 맛있고 저 빵 맛있고 저녁 때 가면 머 어쩌고 다 팔리니까 언넝 가보셈",
};

const places = Array(4).fill(recommendationData);

function Home() {
  return (
    <div className="home-container">
      {/* 상단 녹색 영역 */}
      <div className="top-section">
        <div className="content-wrapper">
          <Header />
          <LogoSection />
          <SearchBar />
        </div>
      </div>

      {/* 하단 흰색 콘텐츠 영역 */}
      <div className="bottom-section">
        <div className="content-wrapper">
          <RecommendationSection
            title="꿈돌이가 추천하는 빵집"
            places={places}
          />
          <RecommendationSection
            title="꿈돌이가 추천하는 빵집"
            places={places}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
