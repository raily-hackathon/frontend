/* src/pages/MyQuestions.js */
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./MyQuestions.css";

function MyQuestions() {
  const navigate = useNavigate();

  // 임시 질문 데이터
  const questions = [
    {
      id: 1,
      question: "서울에서 유명한 빵집 추천해주세요",
      date: "2024-01-15",
      answerCount: 5,
    },
    {
      id: 2,
      question: "강남 근처 조용한 카페 어디 있나요?",
      date: "2024-01-14",
      answerCount: 3,
    },
    {
      id: 3,
      question: "부산 여행 가면 꼭 가봐야 할 빵집",
      date: "2024-01-12",
      answerCount: 7,
    },
    {
      id: 4,
      question: "홍대에서 맛있는 크로아상 파는 곳?",
      date: "2024-01-10",
      answerCount: 2,
    },
  ];

  return (
    <div className="my-questions-container">
      <div className="top-section-green">
        <div className="content-wrapper">
          <Header />
          <div className="page-header">
            <button onClick={() => navigate(-1)} className="back-button">
              ← 돌아가기
            </button>
            <h1>내 질문</h1>
          </div>
        </div>
      </div>

      <div className="questions-content">
        <div className="content-wrapper">
          <div className="questions-list">
            {questions.map((q) => (
              <div key={q.id} className="question-item">
                <div className="question-header">
                  <h3>{q.question}</h3>
                  <span className="question-date">{q.date}</span>
                </div>
                <div className="question-footer">
                  <span className="answer-count">답변 {q.answerCount}개</span>
                  <button className="view-button">자세히 보기</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyQuestions;
