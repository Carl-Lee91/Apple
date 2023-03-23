import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, changeTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]); // 자주 변경될것 같은 html은 state로 만들기
  let [좋아요, plusThumbsup] = useState(0); // state 이름, state 함수

  return (
    <div className="App">
      <div className="black-nav">
        <h4>"리액트 블로그"</h4>
      </div>
      <div className="list">
        <button
          onClick={() => {
            let copy = [...글제목];
            copy.sort();
            changeTitle(copy);
          }}
        >
          가나다순정렬
        </button>
        <h4>
          {글제목[0]}{" "}
          <button
            onClick={() => {
              let copy = [...글제목]; // state 함수는 기존 == 신규 일경우 동작하지 않는다. ...는 괄호를 벗겨주세요라는 문법 걍 눈속임
              copy[0] = "여자 코트 추천";
              changeTitle(copy);
            }}
          >
            바꾸기
          </button>
          <span
            onClick={() => {
              plusThumbsup(좋아요 + 1);
            }}
          >
            👍
          </span>{" "}
          {좋아요}
        </h4>
        <Title />
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <Title />
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <Title />
      </div>
      <Modal />
    </div>
  );
}

const Title = () => {
  return <p>2월 17일 발행</p>;
};

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
} // 켐포넌트를 이렇게 따로 함수로 빼서 사용가능함,
// 1.반복적인 html은 이렇게 하면 좋음
// 2. 큰 페이지들
// 3. 자주변경되는 것들

export default App;
