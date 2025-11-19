/* src/pages/PlaceDetail.js */
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import "./PlaceDetail.css";

function PlaceDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isSaved, setIsSaved] = useState(false);

  // 임시 장소 데이터
  const place = {
    id: id,
    name: "하레하레",
    category: "빵집",
    rating: 4.5,
    reviewCount: 128,
    address: "서울특별시 강남구 테헤란로 123",
    phone: "02-1234-5678",
    hours: "평일 08:00 - 21:00 / 주말 09:00 - 20:00",
    description:
      "신선한 재료로 매일 아침 직접 만드는 수제 빵집입니다. 특히 크로아상과 바게트가 인기 메뉴입니다. 저녁 늦게 가면 빵이 다 팔릴 수 있으니 오전이나 점심시간에 방문하시는 것을 추천드립니다.",
  };

  const reviews = [
    {
      id: 1,
      author: "김**",
      rating: 5,
      date: "2024-01-15",
      content: "크로아상이 정말 맛있어요! 버터향이 진하고 겉은 바삭하고 속은 촉촉해요.",
    },
    {
      id: 2,
      author: "이**",
      rating: 4,
      date: "2024-01-12",
      content: "빵 종류가 다양하고 맛있습니다. 다만 인기가 많아서 저녁에는 품절되는 경우가 많아요.",
    },
    {
      id: 3,
      author: "박**",
      rating: 5,
      date: "2024-01-10",
      content: "바게트가 일품이에요. 딱딱하지 않고 적당히 쫄깃해서 좋습니다.",
    },
  ];

  const menuItems = [
    { name: "크로아상", price: "3,500원" },
    { name: "바게트", price: "4,000원" },
    { name: "소금빵", price: "2,500원" },
    { name: "앙버터", price: "4,500원" },
    { name: "식빵", price: "6,000원" },
  ];

  return (
    <div className="place-detail-container">
      <div className="top-section-green">
        <div className="content-wrapper">
          <Header />
          <div className="page-header">
            <button onClick={() => navigate(-1)} className="back-button">
              ← 돌아가기
            </button>
          </div>
        </div>
      </div>

      <div className="detail-content">
        <div className="content-wrapper">
          <div className="place-main-info">
            <div className="place-image-large">
              <div className="image-placeholder">🏪</div>
            </div>
            <div className="place-header-info">
              <div className="title-row">
                <h1>{place.name}</h1>
                <button
                  className={`save-button ${isSaved ? "saved" : ""}`}
                  onClick={() => setIsSaved(!isSaved)}
                >
                  {isSaved ? "❤️ 저장됨" : "🤍 저장"}
                </button>
              </div>
              <p className="category">{place.category}</p>
              <div className="rating-info">
                <span className="rating">⭐ {place.rating}</span>
                <span className="review-count">리뷰 {place.reviewCount}개</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h2>정보</h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">📍 주소</span>
                <span className="info-value">{place.address}</span>
              </div>
              <div className="info-item">
                <span className="info-label">📞 전화</span>
                <span className="info-value">{place.phone}</span>
              </div>
              <div className="info-item">
                <span className="info-label">🕐 영업시간</span>
                <span className="info-value">{place.hours}</span>
              </div>
            </div>
          </div>

          <div className="description-section">
            <h2>소개</h2>
            <p>{place.description}</p>
          </div>

          <div className="menu-section">
            <h2>메뉴</h2>
            <div className="menu-list">
              {menuItems.map((item, index) => (
                <div key={index} className="menu-item">
                  <span className="menu-name">{item.name}</span>
                  <span className="menu-price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reviews-section">
            <h2>리뷰 ({reviews.length})</h2>
            <div className="reviews-list">
              {reviews.map((review) => (
                <div key={review.id} className="review-item">
                  <div className="review-header">
                    <div>
                      <span className="review-author">{review.author}</span>
                      <span className="review-rating">
                        {"⭐".repeat(review.rating)}
                      </span>
                    </div>
                    <span className="review-date">{review.date}</span>
                  </div>
                  <p className="review-content">{review.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetail;
