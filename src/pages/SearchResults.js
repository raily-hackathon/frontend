/* src/pages/SearchResults.js */
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import PlaceCard from "../components/PlaceCard";
import SearchBar from "../components/SearchBar";
import "./SearchResults.css";

function SearchResults() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  // 임시 검색 결과 데이터
  const searchResults = [
    {
      id: 1,
      title: "하레하레",
      description:
        "이 빵 맛있고 저 빵 맛있고 저녁 때 가면 머 어쩌고 다 팔리니까 언넝 가보셈",
    },
    {
      id: 2,
      title: "성심당",
      description: "대전의 명물 빵집. 튀김소보로와 부추빵이 유명합니다.",
    },
    {
      id: 3,
      title: "델리 바게트",
      description: "프랑스식 바게트와 크루아상 전문점. 아침 일찍 가야 좋은 빵을 살 수 있어요.",
    },
    {
      id: 4,
      title: "파리바게트 강남점",
      description: "다양한 빵과 케이크를 판매하는 체인점. 24시간 운영합니다.",
    },
    {
      id: 5,
      title: "소금빵 공방",
      description: "부드러운 소금빵이 일품인 작은 빵집. 재료에 신경을 많이 씁니다.",
    },
    {
      id: 6,
      title: "뚜레쥬르 홍대점",
      description: "홍대 근처 편하게 들를 수 있는 빵집. 케이크와 샌드위치도 좋아요.",
    },
  ];

  return (
    <div className="search-results-container">
      <div className="top-section-green">
        <div className="content-wrapper">
          <Header />
          <div className="page-header">
            <button onClick={() => navigate(-1)} className="back-button">
              ← 돌아가기
            </button>
          </div>
          <SearchBar />
        </div>
      </div>

      <div className="results-content">
        <div className="content-wrapper">
          <div className="results-header">
            <h2>
              "{query}" 검색 결과
            </h2>
            <p className="results-count">{searchResults.length}개의 결과를 찾았습니다</p>
          </div>

          <div className="results-grid">
            {searchResults.map((place) => (
              <div
                key={place.id}
                onClick={() => navigate(`/place/${place.id}`)}
                style={{ cursor: "pointer" }}
              >
                <PlaceCard title={place.title} description={place.description} />
              </div>
            ))}
          </div>

          {searchResults.length === 0 && (
            <div className="no-results">
              <p>검색 결과가 없습니다</p>
              <p className="no-results-hint">다른 검색어로 시도해보세요</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
