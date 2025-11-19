/* src/pages/MyTrips.js */
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./MyTrips.css";

function MyTrips() {
  const navigate = useNavigate();

  // 임시 여행 데이터
  const trips = [
    {
      id: 1,
      title: "서울 빵집 투어",
      date: "2024-01-20 ~ 2024-01-22",
      places: 5,
      image: null,
    },
    {
      id: 2,
      title: "부산 카페 여행",
      date: "2024-02-01 ~ 2024-02-03",
      places: 8,
      image: null,
    },
    {
      id: 3,
      title: "제주도 맛집 탐방",
      date: "2024-02-15 ~ 2024-02-18",
      places: 12,
      image: null,
    },
  ];

  // 저장한 장소
  const savedPlaces = [
    {
      id: 1,
      name: "하레하레",
      category: "빵집",
      location: "강남구",
    },
    {
      id: 2,
      name: "성심당",
      category: "빵집",
      location: "대전",
    },
    {
      id: 3,
      name: "카페 오닉스",
      category: "카페",
      location: "홍대",
    },
    {
      id: 4,
      name: "델리 바게트",
      category: "빵집",
      location: "이태원",
    },
  ];

  return (
    <div className="my-trips-container">
      <div className="top-section-green">
        <div className="content-wrapper">
          <Header />
          <div className="page-header">
            <button onClick={() => navigate(-1)} className="back-button">
              ← 돌아가기
            </button>
            <h1>내 여행</h1>
          </div>
        </div>
      </div>

      <div className="trips-content">
        <div className="content-wrapper">
          <section className="trips-section">
            <div className="section-header">
              <h2>여행 계획</h2>
              <button className="add-button">+ 새 여행 추가</button>
            </div>
            <div className="trips-grid">
              {trips.map((trip) => (
                <div key={trip.id} className="trip-card">
                  <div className="trip-image-placeholder">
                    {trip.image ? (
                      <img src={trip.image} alt={trip.title} />
                    ) : (
                      <div className="empty-image">📍</div>
                    )}
                  </div>
                  <div className="trip-info">
                    <h3>{trip.title}</h3>
                    <p className="trip-date">{trip.date}</p>
                    <p className="trip-places">{trip.places}개 장소</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="saved-places-section">
            <div className="section-header">
              <h2>저장한 장소</h2>
            </div>
            <div className="saved-places-list">
              {savedPlaces.map((place) => (
                <div
                  key={place.id}
                  className="saved-place-item"
                  onClick={() => navigate(`/place/${place.id}`)}
                >
                  <div className="place-icon">🏪</div>
                  <div className="place-info">
                    <h4>{place.name}</h4>
                    <p>
                      {place.category} · {place.location}
                    </p>
                  </div>
                  <button className="remove-button">✕</button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MyTrips;
